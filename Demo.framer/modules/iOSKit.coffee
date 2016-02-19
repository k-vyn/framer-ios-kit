#iOSKit Module
#By Kevyn Arnott @kvyn_

defaults = {
	constraintTypes: ["top", "leading", "trailing", "bottom"]
	constraints: {
		top: {
			"prop" : "y"
			"objProp" : "maxY"
		}
		leading: {
			"prop" : "x"
			"objProp" : "maxX"
		}
		bottom: {
			"prop" : "maxY"
			"objProp" : "height"
			"objProp2" : "y"
			"opp" : "top"
		}
		trailing: {
			"prop" : "maxX"
			"objProp" : "width"
			"objProp2" : "x"
			"opp" : "leading"
		}
	}
}

exports.height = 1337
exports.width = 750
exports.scale = 2



## AutoLayout

#checks if two layers have the same parent
exports.sameParent = (layer1, layer2) ->
	parentOne = layer1.superLayer
	parentTwo = layer2.superLayer
	if parentOne == parentTwo
		return true
	else 
		return false

#Refreshes Layer or All Layers
exports.layout = (layer) ->
	if layer == undefined
		@.array = Framer.CurrentContext.layers
	else 
		@.array = [layer]
	for layer in @.array
		if layer.constraints != undefined
			for c in defaults.constraintTypes
				layoutMove(layer, c)

#Move & Resizes Layers
layoutMove = (layer, type) ->
	if layer.constraints[type] != undefined 
		prop = defaults.constraints[type].prop
		objProp = defaults.constraints[type].objProp
		if type != "bottom" && type != "trailing"
			# Handle Top & Leading
			if layer.constraints[type] == parseInt(layer.constraints[type], 10)
				layer[prop] = layer.constraints[type] * exports.scale
			else 
				if layer.constraints[type].length == undefined
					layer[prop] = layer.constraints[type][objProp]
				if layer.constraints[type].length == 1
					if layer.constraints[type][0] == parseInt(layer.constraints[type][0], 10)
						layer[prop] = layer.constraints[type][0] * exports.scale
					else
						layer[prop] = layer.constraints[type][0][objProp]
				if layer.constraints[type].length > 1 
					for object in layer.constraints[type]
						if object == parseInt(object, 10)
							@.objInt = object
						else 
							@.objLayer = object
					layer[prop] = (@.objInt * exports.scale) + @.objLayer[objProp]
		else
			## Handle Bottom & Trailing
			opp = defaults.constraints[type].opp
			objProp2 = defaults.constraints[type].objProp2
			if layer.constraints[opp] == undefined
				## No opposite
				if layer.constraints[type] == parseInt(layer.constraints[type], 10)
					## Only Integer
					if layer.superLayer != null
						#Has a superLayer
						@[objProp] = layer.superLayer[objProp]
					else
						#Does not have a superLayer
						@[objProp] = exports[objProp]
					layer[prop] = @[objProp] - (layer.constraints[type] * exports.scale)
				else 
					if layer.constraints[type].length == undefined
						#Entered Layer
						if exports.sameParent(layer, layer.constraints[type])
							layer[prop] = layer.constraints[type][objProp2]
						else
							print "Error –
							Layer id:#{layer.id} and Layer id:#{layer.constraints[type].id} have different parents. 
							When setting relationships in AutoLayout please have both layers inside the same parent."
					if layer.constraints[type].length == 1
						#Array of One
						print "some sort of array of one"

					if layer.constraints[type].length > 1	
						#Relationship Array
						print "relationship"


