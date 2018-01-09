//META{"name":"ChannelMemberDisplayFix"}*//

class ChannelMemberDisplayFix {
	start () {
		let visible = false
		let check = setInterval(() => {
			if ($('[class*="scroller-"].channel-members').length) {
				if (!visible) {
					visible = true
					let element = $('[class*="scroller-"].channel-members')
					element.on('scroll.ChannelMemberDisplayFix', e => {
						if (e.currentTarget.scrollTop < 3) element.scrollTop(2)
					})
					element.scrollTop(2)	
				}
			} else {
				visible = false
			}
		}, 1000)
	}
	load  () {}
	unload  () {}
	stop  () {
		$('[class*="scroller-"].channel-members').off('scroll.ChannelMemberDisplayFix')
	}
	onMessage  () {}
	onSwitch  () {}
	observer  () {}
	getSettingsPanel  () { return '' }
	getName  () { return 'ChannelMemberDisplayFix' }
	getDescription  () { return 'Fixes a weird display bug with the channel member list not explanding fully in certain conditions.' }
	getVersion  () { return '1.0.0' }
	getAuthor  () { return 'skildust' }
}