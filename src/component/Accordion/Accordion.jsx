import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import "./Accordion.scss";

// /**
//  * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
//  */
const AccordionItem = ({ header, ...rest }) => (
  <Item className="item"
    {...rest}
    header={
      <>
        {header}
        <img className="chevron-down" src={chevronDown} alt="Chevron Down" />
      </>
    }
  />
);

export default function Accordions() {
  return (
    <div className="App">
      <Accordion transition transitionTimeout={200} >
        <AccordionItem header="What is Lorem Ipsum?" initialEntered className="accordion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem header="Where does it come from?">
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
        </AccordionItem>

        <AccordionItem header="Why do we use it?">
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
