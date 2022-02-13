import { Layout , Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import Link from 'next/link'
import Head from 'next/head'


export default function AppLayout({children}) {
	return (
		<Layout className="layout">
			<Head>
				<title>Jur Front End</title>
 
			</Head>
			<Header>
				<Menu theme="dark" mode="horizontal">
					<Menu.Item key={0}>
						<Link href="/" >Home</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content>
				{children}
			</Content>
			<Footer>

			</Footer>
		</Layout>	
	)
}
