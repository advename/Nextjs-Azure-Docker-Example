export default function Home() {
  return (
    <div>
      <h1>NextJS-Azure-Docker Example</h1>
      <p>Client envrionment: [{process.env.NEXT_PUBLIC_CLIENT_ENV}]</p>
      <p>Server environment: [{process.env.APPSETTING_SERVER_ENV}]</p>
    </div>
  );
}
