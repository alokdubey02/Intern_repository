import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// old way to connect the component with redux or state with props

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

// connect() is the way to connect the state and components
export default connect(mapStateToProps)(BalanceDisplay);
