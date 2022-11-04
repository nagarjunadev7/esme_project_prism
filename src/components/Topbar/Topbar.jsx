import './topbar.css';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CallIcon from '@mui/icons-material/Call';

const Topbar = () => {
  return (
    <div className='topbar'>
    <div><LanguageIcon /></div>
    <div>English</div>
    <div><ExpandMoreIcon /></div>
    <div><CallIcon /></div>
    <div>+123 456 789</div>
    </div>
  )
}

export default Topbar