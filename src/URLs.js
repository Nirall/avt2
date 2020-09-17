import HomePage from './pages/HomePage/index';
import HotDieForgingPage from './pages/HotDieForgingPage/index';
import MechanicalProcessingPage from './pages/MechanicalProcessingPage/index';
import SamplesPage from './pages/SamplesPage/index';
import ContactsPage from './pages/ContactsPage/index';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';

const URLs = [
  { path: '/', name: 'Главная', component: HomePage },
  { path: '/hot-die-forging', name: 'Горячая объемная штамповка', component: HotDieForgingPage },
  { path: '/mechanical-processing', name: 'Механическая обработка', component: MechanicalProcessingPage },
  { path: '/samples', name: 'Изделия', component: SamplesPage },
  { path: '/contacts', name: 'Контакты', component: ContactsPage },
  { path: '/privacy', name: 'Соглашение', component: PrivacyPage },
]

export default URLs;