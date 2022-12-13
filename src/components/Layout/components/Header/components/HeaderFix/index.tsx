//Components
import './HeaderFix.scss';
import HeaderContent from '../HeaderContent';
import JobCategoryList from '../JobCategoryList';

const HeaderFix = () => {
    return (
        <div id="header-fix" className="header">
            <HeaderContent />
            <JobCategoryList />
        </div>
    );
};

export default HeaderFix;
