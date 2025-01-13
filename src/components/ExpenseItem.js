import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 10th 2025</div>
            <div className="expense-item_description">
                <h2>Car Insurance</h2>
                <div className="expense-item_price">$205.99</div>
            </div>
        </div>
    )
}
export default ExpenseItem; 