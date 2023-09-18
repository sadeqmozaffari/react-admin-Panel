import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router";
import CategoryList from "../features/categories/components/category-list";
import { httpInterceptedService } from "@core/http-service";

const CourseCategories = () => {
  const data = useLoaderData();
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h3 className="mb-0">دسته بندی دوره ها</h3>
          <a href="#" className="btn btn-primary fw-bolder  mt-n1">
            <i className="fas fa-plus ms-2"></i>افزودن دسته جدید
          </a>
        </div>
        <Suspense
          fallback={<p className="text-info">در حال دریافت اطلاعات ...</p>}
        >
          <Await resolve={data.categories}>
            {(loadedCategories) => <CategoryList categories={loadedCategories} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

const loadCategories = async (request) => {
  const page = new URL(request.url).searchParams.get('page') || 1;
  const pageSize = 10;
  let url = '/CourseCategory/sieve';

  url += `?page=${page}&pageSize=${pageSize}`;

  const response = await httpInterceptedService.get(url);
  return response.data;
};

export async function categoriesLoader({request}) {
  return defer({
    categories: loadCategories(request),
  });
}

export default CourseCategories;
