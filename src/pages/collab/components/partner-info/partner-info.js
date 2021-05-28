import './partner-info.css';

function PartnerInfo({ name, desc, groups, members }) {
    let memberList = null;
    let groupList = null;

    if (members) {
        memberList = (
            <div>
                {members.map((member, index) => (
                    <p key={index}>
                        {member.name}
                        {member.desc ? ' - ' + member.desc : ''}
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
                        <h3>{group.name}</h3>
                        {group.desc ? <h4>{group.desc}</h4> : null}

                        {group?.members.map((member, index) => (
                            <p key={index}>
                                {member.name}
                                {member.desc ? ' - ' + member.desc : null}
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
            {desc ? <h4>{desc}</h4> : null}
            {memberList}
            {groupList}
        </div>
    );
}

export default PartnerInfo;
