import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, close, title, body, children }) => {
  const modalWrapperRef = useRef();
  useEffect(() => {
    isOpen &&
      setTimeout(() => {
        modalWrapperRef.current.classList.add("show");
      }, 10);
  }, [isOpen]);
  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="modal fade"
            style={{ display: "block" }}
            onClick={() => close(false)}
            ref={modalWrapperRef}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fw-bolder">{title}</h5>
                  <button
                    type="button"
                    className="btn-close m-0"
                    onClick={() => close(false)}
                  ></button>
                </div>
                <div className="modal-body m-3">
                  <p className="mb-0">{body}</p>
                </div>
                <div className="modal-footer">{children}</div>
              </div>
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
};

export default Modal;
