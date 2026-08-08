import { NavLink, useParams } from 'react-router-dom';
import { usePageTheme } from '../../../themes/PageThemeContext';
import './IllustrationArticleCard.css';

import { ROUTES, API_ROUTES } from '../../../../app/routes';

export default function IllustrationArticleCard({ article }) {
  const { pageTheme } = usePageTheme();
  const { lang } = useParams();

  return (
    <NavLink
      className="illustr-card"
      to={ROUTES.item_route(lang, article.type, article.translation.slug)}
      onClick={() => setIsOpen(false)}
    >
      <img
        className={article.media}
        src={API_ROUTES.image_route(article.media)}
        alt={article.media}
      />
      {/* <div>{article.translation.title}</div> */}
    </NavLink>
  );
}
