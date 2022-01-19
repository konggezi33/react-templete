import { Suspense } from 'react'
import { Layout } from 'antd';
import { Route, Link, Routes } from 'react-router-dom'
import 'antd/dist/antd.css'
// import './Layer.css';
import routes  from '../../Router'
const { Header, Sider, Content } = Layout;
const Layer = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>
        {
           routes.map(item =>{
             return <div><Link to={item.path} >{item.name}</Link></div>
           })
         }
        </Sider>
        <Content>
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
            {
              routes.map(item =>{
                return <Route path={item.path}  element={<item.component />}/>
              })
            }
            </Routes>
         </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Layer