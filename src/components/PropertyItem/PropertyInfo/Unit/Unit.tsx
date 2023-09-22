import {IUnit} from "../../../../types";

interface PropertyInfoProps {
  unit: IUnit;
}

export const Unit = ({ unit }: PropertyInfoProps) => {
  return (
    <>
      <span className='units__item'>{unit.bedroom}bd</span>
      <span className='units__item'>{unit.bathroom}ba</span>
      <span className='units__item'>
        {unit.squareFootage.toLocaleString('en-US')}&nbsp;ft
        <span className='units__item-square'>2</span>
      </span>
    </>
  );
}