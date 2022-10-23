const TransformerAbstract = require('./transformer-abstract');
class ClaimTransformer extends TransformerAbstract{
    transform(claim){
        return {
            id : claim.id,
            upcoming: {
                
            },
            created_at : this.$moment(claim.created_at),
            start_date : this.$moment(claim.claim_start_date*1000),
            has_aditional_spots : claim.claim_continue_date ? true : false,
            claim_continue_date : claim.has_aditional_spots ? this.$moment(claim.claim_continue_date*1000) : null,
            is_started : now.diff(claim.start_date) >= 0,
            end_date : this.$moment(claim.claim_end_date*1000),
            remaining_date : claim.has_aditional_spots ? Math.abs(claim.claim_continue_date.unix() - now.unix()) : Math.abs(claim.is_started ? (claim.claim_end_date - now.unix()) : (claim.claim_start_date - now.unix())),
            wallet_sent_date : claim.claim_end_date - now.unix(),
            totalSpots : claim.spots_for_all_holders + claim.spots_for_loyal_holders + claim.spots_for_whales,
            remaining_spots_for_all_holders : claim.spots_for_all_holders - claim.used_spots_for_all_holders,
            remaining_spots_for_whales : claim.spots_for_whales - claim.used_spots_for_whales,
            remaining_spots_for_loyal_holders : claim.spots_for_loyal_holders - claim.used_spots_for_loyal_holders,
            totalUsedSpots : claim.used_spots_for_all_holders + claim.used_spots_for_loyal_holders + claim.used_spots_for_whales,
            remaining_spots : totalSpots - totalUsedSpots,
            is_joined : joinedClaims.findIndex(i => i.campaign_id == claim.id) > -1,
            is_overdue : claim.end_date.diff(now) <= 0,
            is_ended : claim.is_overdue || claim.is_completed || claim.is_joined,
            priority : null,
            type: 'claim'
        }
    }
}

module.exports = ClaimTransformer