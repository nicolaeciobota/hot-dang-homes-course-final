const Loading = () => {
 return (
  <section className="py-24"><div>Loading data....</div>
   <span className="h-screen w-full flex justify-center items-center">
      <span className="animate-spin relative flex h-10 w-10 rounded-sm bg-purple-400 opacity-75"></span>
    </span>
  </section>
 )
}
export default Loading;