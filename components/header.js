import Link from 'next/link'


const Header = (props) => (
  <header>
    <nav className='container'>
      <div className='row'>
        <div className="five columns logo">
          <img src='/static/s6-logo.png'/>
        </div>
        <ul className="seven columns">
          <li>
            <Link href='/contact'>
              <a>{'CONTACT'}</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <style jsx> {`
      a {
        text-decoration: none;
        color: black;
        font-size: 18px;
      }
      li {
        list-style: none;
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
      }
      img {
        width: 50%;
        padding: 12px;
        height: 100%;
      }
      nav {
        min-height: 90px;
      }
      .logo {
        display: flex;
        justify-content: center;
      }

    `}
    </style>
  </header>
)

export default Header
