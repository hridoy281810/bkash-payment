import axios from 'axios';
import '../App.css'

const Home = () => {
  const pay =async ()=> {
    // event.preventDefault(); /
    console.log("first")
    try {
      const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', { amount: 50, orderId: 1 }, { withCredentials: true })
      console.log(window.location.href)
      window.location.href = data.bkashURL

  } catch (error) {
      console.log(error.response.data)
  }


  }
    return (
        <div className="root">
          <div className=" flex justify-center items-center">
          <button onClick={pay} className="btn btn-success">Pay Bkash</button>
          </div>
        </div>
    );
};

export default Home;