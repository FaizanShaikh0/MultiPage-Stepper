import Stepper from "./components/Stepper";
import "./styles.css";

export default function App() {
  const steps = [
    {
      label: "Personal details",
      content: <div>Personal Info Content</div>,
    },
    {
      label: "Acount Info",
      content: <div>Branch Name</div>,
    },
    {
      label: "Payment",
      content: <div>Totall amout is 250000</div>,
    },
    {
      label: "Confirmation",
      content: <div>send 250000?</div>,
    },
    {
      label: "Review",
      content: <div>Final Step</div>,
    },
  ];
  return (
    <div className="App">
      <Stepper steps={steps} />
    </div>
  );
}
