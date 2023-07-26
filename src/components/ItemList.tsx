import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }: any) => {
    return (
        <ul>
            {items?.map((item: any) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList;