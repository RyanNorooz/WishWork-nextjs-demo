const dummyData = [...Array(20)].map((id) => ({
  id,
  price: (Math.random() * 10000000000).toLocaleString('en-US', { maximumFractionDigits: 0 }),
  amount: Math.random().toFixed(6),
  total: (Math.random() * 10000000).toLocaleString('en-US', { maximumFractionDigits: 0 }),
}))

export default function Promotions(props) {
  return (
    <div {...props}>
      <div style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem', color: '#00a841' }}>
        پیشنهاد های خرید
      </div>

      <table style={{ width: '100%', tableLayout: 'auto' }}>
        <thead style={{ fontWeight: '800', textAlign: 'right' }}>
          <tr>
            <th>قیمت</th>
            <th>مقدار</th>
            <th>مبلغ کل</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: '.8rem' }}>
          {dummyData.map(({ id, price, amount, total }) => (
            <tr key={id}>
              <td>{price}</td>
              <td>{amount}</td>
              <td style={{ color: '#00a841' }}>{total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'center', width: '100%', padding: '1rem 0 0' }}>مشاهده بیشتر ▼</div>
    </div>
  )
}
