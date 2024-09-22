import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
const loggedIn = {firstName : 'Rajath',lastName:"K",email:"kalarikkalrajath@gmail.com" }

  return (
    // <div>Home</div>
    <section className='home' >
      <div className='home-content' >
        <header className='home-header' >
          
          <HeaderBox
          type="greeting"
          title="welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your Account and transactions efficiently"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.45}
          
          />

        </header>
        Recent Transactions

      </div>
      <RightSideBar  user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:239.9}]}
      />
    </section>
  )
}


export default Home