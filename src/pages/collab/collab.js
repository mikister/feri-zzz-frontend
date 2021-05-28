import { Fragment } from 'react';
import { partners } from '../../configs/collaborators.json';
import PartnerInfo from './components/partner-info/partner-info';

function CollabPage() {
    return (
        <Fragment>
            {partners.map((partner, index) => (
                <PartnerInfo
                    key={index}
                    name={partner.name}
                    desc={partner.desc}
                    groups={partner.groups}
                    members={partner.members}
                />
            ))}
        </Fragment>
    );
}

export default CollabPage;
