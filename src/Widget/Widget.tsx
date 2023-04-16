import './Widget.scss';

export interface WidgetProps {
  flag: string;
  label: string;
  value: string | number;
  country: string;
}
export const Widget = (props: WidgetProps) => {
  const { flag, label, value, country } = props;

  return (
    <div className="widget">
      {label}
      <span className="country-style">{country}</span>
      <span className="number-style">{value}</span>
      <img src={`flags/${flag}.png`} alt="Flag icon" />
    </div>
  );
};
