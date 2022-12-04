//Material UI
import { SellingContentProps } from '@/pages/Home/interfaces';

//Others
import { CheckCircleOutline } from '@mui/icons-material';

const SellingPropoItem = ({ data }: { data: SellingContentProps }) => {
    return (
        <div className="selling-propo__item">
            <div className="selling-propo__item-title">
                <CheckCircleOutline />
                <h6>{data.name}</h6>
            </div>
            <span>{data.content}</span>
        </div>
    );
};

export default SellingPropoItem;
