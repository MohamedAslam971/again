const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 text-3xl font-bold">Contact</h1>

      <form className="flex flex-col w-6/12">
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="number"
          placeholder="Phone"
          className="border border-black p-2 m-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-black p-2 m-2"
        />
        <div className="flex justify-center">
          <button className="px-2 bg-gray-500 text-white rounded-lg text-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
