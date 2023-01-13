import {useExecutive} from "../../context/ExecutiveContext";
import SliderContainer from "./SliderContainer/SliderContainer";
import Error from "../Error/Error";
import {useError} from "../../context/ErrorContext";

const Executives = () => {
  const {executives} = useExecutive();
  const {error} = useError();
  return (
    <section className="executives" id="executives">
      <h2 className="heading-2">Yönetim Kadromuz</h2>
      {executives ? <SliderContainer/> : error && ''}
      {error && <Error/>}
    </section>
  );
};

export default Executives;
