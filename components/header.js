import Link from 'next/link'


const Header = (props) => (
  <header>
    <nav className='container'>
      <div className='row'>
        <div className="five columns logo">
          <img src='/static/s6-logo.png'/>
        </div>
        <ul className="five columns">
          <li>
            <Link href='/projects'>
              <a>{'PROJECTS'}</a>
            </Link>
          </li>
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
        margin: 0;
        padding: 10px;
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        float: right;
      }
      img {
        width: 75%;
        padding: 12px;
        height: 100%;
      }

      .logo {
        display: flex;
        justify-content: center;
      }
      header {
        background-color: white;
      }


    `}
    </style>
  </header>
)

export default Header
