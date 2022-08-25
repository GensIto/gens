import { Layout } from "../components/Layout/Layout";
import { HomeNav } from "../components/tools/HomeNav";

export default function Thank() {
  return (
    <Layout title='Thank You!'>
      <div className='mt-12'>
        <h1 className='text-center text-white text-xl'>
          Thank You for Contact!
        </h1>
        <div className='mt-5'>
          <HomeNav />
        </div>
      </div>
    </Layout>
  );
}
