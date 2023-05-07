import {Offcanvas, Button, Container} from "react-bootstrap";
import {Logo} from "./Logo";
import {useIsOpen} from "../../hooks/isOpen";

export function ShoppingList() {
  const showing = useIsOpen();
  return (
    <Offcanvas show={showing.isShowing} placement="end" className="w-3/4" backdrop={false}>
      <Offcanvas.Body className="border-transparent bg-[#FFF0DE]">
        <div className="flex justify-center">
          <div className="bg-[#80485B] w-[308.76px] h-[129.91px] rounded relative flex justify-center align-items-center flex-col">
            <Logo />
            <p className="text-white text-lg font-bold float-right ms-5 my-2">
              Didn't find what you <span className="inline-block">need?</span>
            </p>
            <Button className="w-[120px] h-[40px] bg-white text-black border-white mb-2">
              Add item
            </Button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
