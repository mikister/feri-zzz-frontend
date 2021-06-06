import './partner-info.css';

import { useTranslation } from 'react-i18next';

function PartnerInfo({ name, desc, groups, members }) {
    const { t } = useTranslation(['partners']);

    let memberList = null;
    let groupList = null;

    if (members) {
        memberList = (
            <div>
                {members.map((member, index) => (
                    <p key={index}>
                        {t(member.name)}
                        {member.desc ? ' - ' + t(member.desc) : ''}
                    </p>
                ))}
            </div>
        );
    }

    if (groups) {
        groupList = (
            <div>
                {groups.map((group, index) => (
                    <div key={index}>
                        <h3>{t(group.name)}</h3>
                        {group.desc ? <h4>{t(group.desc)}</h4> : ''}

                        {group?.members.map((member, index) => (
                            <p key={index}>
                                {t(member.name)}
                                {member.desc ? ' - ' + t(member.desc) : ''}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="partner-info">
            <h2>{name}</h2>
            {desc ? <h4>{t(desc)}</h4> : ''}
            {memberList}
            {groupList}
        </div>
    );
}

export default PartnerInfo;
