
const Contact = () => {
  return (
  <div id="contact" className="max-w-[800px] m-auto pb-5">
    <h1 className="px-6 text-center text-2xl text-orange-400 my-4">Get in Touch</h1>
    <form className="flex flex-col gap-4 px-6 ">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className=" h-12 rounded-md px-2 bg-transparent border-2 border-orange-700 outline-none duration-300"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className=" h-12 rounded-md px-2 bg-transparent border-2 outline-none  border-orange-700"
          />
          <textarea
            name="message"
            id="message"
            cols="60"
            rows="8"
            placeholder="Leave a Message"
            className="rounded-md px-2 pt-2 bg-transparent resize-none outline-none  border-2 border-orange-700 text-slate-600"
          />
          <input
            type="submit"
            value="Send"
            className=" bg-slate-800 py-4 text-white rounded-md hover:bg-slate-700 duration-150 cursor-pointer"
          />
        </form>
        </div>
  );
};

export default Contact;
