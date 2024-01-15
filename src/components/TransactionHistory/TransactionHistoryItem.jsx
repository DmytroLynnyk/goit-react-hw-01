export const TransactionHistoryItem = ({ item: { type, amount, currency } }) => {
    const Transactiontype =  type.charAt(0).toUpperCase() + type.slice(1);
    return (
        <>
            <td>{Transactiontype}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}