import axios from 'axios';
import '../App.css'

const Home = () => {
  const pay =async ()=> {
    try{
      const {data} = await axios.post('http://localhost:5000/api/bkash/payment/create',{
        amount: 500,orderId: 1},{withCredentials:true})
        console.log(data)
    }catch(error){

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