import {IUnit} from "../../../../types";

interface PropertyInfoProps {
  unit: IUnit;
}

export const Unit = ({ unit }: PropertyInfoProps) => {
  return (
    <div className='units'>
      <span className='units__item'>{unit.bedroom}bd</span>
      <span className='units__item'>{unit.bathroom}ba</span>
      <span className='units__item'>{unit.squareFootage}ft2</span>
    </div>
  );
}