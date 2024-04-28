import mongoose from 'mongoose';

let Donation_List;

try {
  Donation_List = mongoose.model('Donation_List');
} catch {
  const Donation_ListSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
    empId: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  });

  Donation_List = mongoose.model('Donation_List', Donation_ListSchema);
}

export default Donation_List;