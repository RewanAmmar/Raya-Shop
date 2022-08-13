import React from 'react'
import Account_Overview from '../Account_Overview/Account_Overview'
import Account_Setting from '../Account_Setting/Account_Setting'
import Address_Book from '../address book/Address_Book'
import Side_Account from '../Side_Account/Side_Account'

export default function Account_Component() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-2'>
            <Side_Account />
        </div>
        <div className="col-md-8">
            <Account_Overview />
            <Address_Book />
            <Account_Setting />
        </div>
      </div>
    </div>
    </>
  )
}
