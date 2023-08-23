import { useSelector } from 'react-redux';

function ItemList() {
  const items = useSelector(state => state);

  return (
    <table style={{margin: "20px"}}>
      <thead>
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>message</th>
        </tr>
      </thead>
      <tbody>
          <tr >
            <td>{items.firstName}</td>
            <td>{items.lastName}</td>
            <td>{items.email}</td>
            <td>{items.message}</td>
          </tr>
      </tbody>
    </table>
  );
}

export default ItemList;
