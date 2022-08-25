import Router from "next/router";

export const Form = () => {
  const sendForm = async (event: any) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.ok) Router.push("/thank");
  };
  return (
    <form className=' w-full md:w-2/3 mx-auto' onSubmit={sendForm}>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-1 items-start flex-col'>
          <label className='text-white' htmlFor='email'>
            mail address
          </label>
          <input
            id='email'
            name='email'
            className='p-2 w-full md:w-2/3'
            type='email'
            placeholder='name@example.com'
          />
        </div>
        <div className='flex gap-1 items-start flex-col'>
          <label className='text-white' htmlFor='email'>
            name
          </label>
          <input
            id='name'
            name='name'
            className='p-2 w-full md:w-2/3'
            type='text'
            placeholder='Charles Brown'
          />
        </div>
        <div className='flex gap-1 items-start flex-col'>
          <label className='text-white' htmlFor='email'>
            subject
          </label>
          <input
            id='subject'
            name='subject'
            className='p-2 w-full md:w-2/3'
            type='text'
            placeholder='please subject'
          />
        </div>
        <div className='flex gap-1 items-start flex-col'>
          <label className='text-white' htmlFor='message'>
            Message
          </label>
          <textarea
            className='w-full h-64 p-1'
            id='message'
            name='message'
            placeholder='please message'></textarea>
        </div>
        <div className='mx-auto'>
          <button className='text-white' type='submit'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
