import Header from '../components/header/Header';
import BakerTable from '../components/baker-table/BakerTable'

function Baker () {
  return (
    <>
      <Header view="baker"/>
      <BakerTable baker="Елизавета Карамолина"/>
    </>
  );
};
export default Baker;