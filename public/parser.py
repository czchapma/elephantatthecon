import xml.etree.ElementTree as ET
from xml.etree.ElementTree import *

tree = ET.parse('speakers.html')
root = tree.getroot()
for speaker in root:
	img_src = speaker[0][0][0][0].attrib['src']
	title = speaker[0][0][0][0].attrib['title']
	print title.encode('utf-8') + "," + img_src
# print speaker_inner.tag, speaker_inner.attrib

	# speaker_inner = speaker.find('div')
	# print speaker_inner.tag, speaker_inner.attr
	# img = speaker_inner[0][0]['src']
	# print img