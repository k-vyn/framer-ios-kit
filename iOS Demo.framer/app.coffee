# Import file "iOS Kit Demo"
sketch = Framer.Importer.load("imported/iOS Kit Demo@1x")

# Import module
ios = require "ios-kit"

#Convert
sketch = ios.convert(sketch)

#You can access layers with
# print sketch._Field