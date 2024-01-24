import { useSelector } from "react-redux";

function Customer() {
  // whenever the store changes the component re-rendered the use of useSelector.
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
