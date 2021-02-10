var atbtes = {null: 'null', core: 'javascript', interface: 'folder'}
var MAX_ATTRIBUTES = "125"
var MIN_ATTRIBUTES = "5"

function Get_Inter(Inter_Level, inter_low) {
	if (Inter_Level < inter_low) {
		Inter_Level = 0
		var inter_low = null
		alert("Cannot Display More Than Actual")
	}