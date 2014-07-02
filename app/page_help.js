function loadPage_help(){
	// debug("LOADING PAGE >> loadPage_help");
	var content = "<div class='textpage pagecontent'><a name='top'></a>";

	content += "<h1>Help</h1>\
	Peruse the document, but if you have any other questions, you can email <a href='mailto:mail@glyphrstudio.com'>mail@glyphrstudio.com</a>, and we'd be happy to help out.<br><br>\
Jump to a section:<br>\
<a href='#navigation_and_layout'>Navigation and Layout</a>\
<a href='#character_edit_and_linked_shapes_pages'>Character Edit and Linked Shapes pages</a>\
<a href='#test_drive_page'>Test Drive Page</a>\
<a href='#font_settings_page'>Font Settings Page</a>\
<a href='#project_settings_page'>Project Settings Page</a>\
<a href='#'>Open Project Page</a>\
<a href='#import_svg_page'>Import SVG Page</a>\
<a href='#export_font_page'>Export Font Page</a>\
<a href='#about_page'>About Page</a>\
\
<a name='navigation_and_layout'></a>\
<h1>Navigation and Layout</h1>\
The Glyphr Studio work space has three vertical areas: from left to right, the Navigation Bar, the Panel, and the Main Content area.  Selecting an icon in the Navigation Bar will update the Panel and the Main Content areas.  The top option in the Navigation Bar displays all the main pages in the Panel, allowing you to navigate around Glyphr Studio.<br><br>\
Some of the pages have additional Navigation Bar icons - like Attributes, Layers, and Character Selection - that are specific to character editing, or other activities.<br><br>\
The bottom-most icon in the Navigation Bar is a save icon - it does not actually navigate anywhere, but instead is just an omnipresent shortcut to save your Glyphr Project.  When there are changes that have not been saved, the save icon becomes slightly highlighted, and a diamond icon ❖ will be added to the browser title.\
\
<a name='character_edit_and_linked_shapes_pages'></a>\
<h1>Character Edit and Linked Shapes pages</h1>\
The Character Edit and Linked Shapes pages have many shape editing controls in common.  Linked Shapes are single outlines that can be inserted into many characters of a font.  Updating the Linked Shape will also update all the Linked Shape instances.  Characters in your font can have many shapes (both linked and not), so there is an added concept of Layers on the Character Edit page.<br><br>\
Linked Shapes are individual shapes that can be added to many Characters. Any time the Linked Shape is edited, all the Characters that use that Linked Shape are updated. There are many individual letter forms that are shared across characters in a single font - for example the round o form of the letters b,d,g,o,p,q. Linked Shapes were designed to make it easy to keep similar letter forms consistent across a font.<br><br>\
Creating new Linked Shapes, and adding a Linked Shape to a character can be done through the Actions list in the Attributes Panel. The Linked Shapes page is very similar to the Character Edit page. Each Linked Shape is just a single Shape, so there are no shape layers, or add shape buttons. The Linked Shapes page also displays all the shapes that use the current Linked Shape - they are displayed as a thumbnail in the lower left, and update as the Linked Shape is edited. Clicking on one of these thumbnails will navigate to the Character Edit page for that character.\
\
<h2>Shape Editing</h2>\
Shape editing concepts can be found on the Character Edit and Linked Shape pages.  Shape and Path attributes, along with metadata, can be edited either in the Attributes Panel, or interactively using the Edit Canvas in the Content Area.<br><br>\
Many of these attributes can be locked by selecting the small lock icon to the left of the attribute.  This will stop this attribute from accidentally being changed, and in most cases, will limit what can be done on the Edit Canvas.<br><br>\
Unless otherwise noted, most attributes are in Em units.\
\
<h2>Edit Canvas Tools</h2>\
In the Upper Left hand side of the Edit Canvas there are 12 tools. The currently selected tool has a blue background. The tools, from top to bottom, are:\
	<ul>\
	<li>Dual Screen Mode - the Edit Canvas can be torn out into its own window, and all the Character Edit Panels are laid out side-by-side.</li>\
	<li>1:1 Button - Sets the Zoom level where 1 Pixel = 1 Em Unit.</li>\
	<li>M Button (Em Square Button) - Sets the Zoom level to display the entire Em square area </li>\
	<li>Zoom In / Zoom Out - The plus / minus buttons will increase or decrease the size of the Edit Canvas.<br>The Keyboard Shortcut for this tool is the Mouse Scroll Wheel.</li>\
	<li>Zoom Percent - Displays the current zoom level (read only).</li>\
	<li>New Rectangle / New Oval - Click and drag to draw new Rectangles or Ovals.</li>\
	<li>New Path - Draws a new path. Single clicking will create Path Points that do not have handles.  Clicking and dragging will add a Path Point where the click began, and also a symmetrical handle where the click ends.  To stop adding new Path Points, either click the first Path Point, or click off the Edit Canvas.</li>\
	<li>Pan Tool - Moves the canvas up/down/left/right.<br>The Keyboard Shortcut for this tool is the Spacebar.</li>\
	<li>Point Select - Selects and edits individual Path Points and Handles. It cannot move or resize shapes.</li>\
	<li>Shape Select - Selects, moves, and resizes shapes. It cannot edit the individual path points.</li>\
	</ul>\
\
<h2>Keyboard Shortcuts</h2>\
\
<h2>Attributes Panel - Character</h2>\
(Character Edit Page)\
When no shape is selected, the Attributes Panel shows attributes for the currently selected Character.<br><br>\
<b>Character Name</b>\
	<ul>\
	<li>Number of shapes in the character.</li>\
	</ul>\
<b>Bulk-transform character shapes</b><br>\
If there are more than one shape in the character, there are position and dimension controls that will change all the shapes in the character.\
	<ul>\
	<li>X Position - the farthest-left position of the character</li>\
	<li>Y Position - the most-top position of the character</li>\
	<li>Width - the overall width of the character</li>\
	<li>Height - the overall height of the character</li>\
	<li>Flip Vertical / Flip Horizontal - flip the entire character</li>\
	</ul>\
<b>Width metrics for kerning</b><br>\
These metrics are used for exporting a font file\
	<ul>\
	<li>Auto Advance Width - When selected, the width of the character will be calculated automatically based on the farthest right edge of all the Shapes in that character.</li>\
	<li>Advance Width (em units) - If Auto Width is set, this is a read-only attribute for how wide the character is in Em Units.  If Auto Width is not set, a width can be set manually for the character.</li>\
	<li>Use Default Left Side Bearing - When selected, the global default Left Side Bearing will be used for this character.  The Default Left Side Bearing can be updated in on the Font Settings page.  When not selected, the Left Side Bearing can be set manually for this character.</li>\
	<li>Left Side Bearing - If Use Default Left Side Bearing is selected, this displays the inherited value.  If Use Default Left Side Bearing is not selected, this is where a custom value can be entered.</li>\
	</ul>\
\
<h2>Attributes Panel - Shape</h2>\
(Character Edit and Linked Shape Pages)\
	<ul>\
	<li>Name - Any name you want to give this shape.</li>\
	<li>Shape X / Shape Y - The shape's coordinates, as defined by the blue bounding box's upper left corner. These attributes are set in Em Units. These attributes are lockable.</li>\
	<li>Height / Width - Overall size dimensions of the shape. These attributes are set in Em Units. These attributes are lockable.</li>\
	<li>Overlap Mode - The clockwise or counterclockwise direction of Path Points along a Path determine if that path will additively or subtractively overlap with other Shapes in the character.</li>\
	</ul>\
\
<h2>Attributes Panel - Path Point </h2>\
(Character Edit and Linked Shape Pages)\
	<ul>\
	<li>Selected Point - Displays which point is currently selected. 0 is the first Path Point.</li>\
	<li>Point Type - Each Path Point has two handles that control the curve of the path before and after it. There are three kinds of Point Types: Corner (Handles can be anywhere), Flat (Handles will be in line with each other), and Symmetric (Handles will be in-line with each other and equidistant from the Path Point).</li>\
	<li>Point X / Point Y - The Path Point's coordinates. These attributes are set in Em Units. These attributes are lockable.</li>\
	<li>Use Handle 1 / Use Handle 2 - Deselecting this will remove the handle, such that it will not impact the curvature of the path.  These options are only available for Flat and Corner point types.</li>\
	<li>Handle 1 X/Y & Handle 2 X/Y - The Handle's coordinates. These attributes are set in Em Units. These attributes are lockable.</li>\
	<li>Handle 1 Angle / Handle 2 Angle - read-only degree of the handle away from an imaginary horizontal line drawn through the point.  Zero degrees is to the left, 180 degrees to the right.</li>\
	</ul>\
\
<h2>Attributes Panel - Linked Shape Instance</h2>\
(Linked Shape Page)\
	<ul>\
	<li>Name - Any name you want to give this Linked Shape Instance.  Can be different than the Linked Shape itself.</li>\
	<li>Use Linked Shape Position - By default, a Linked Shape Instance is locked to the position of the Linked Shape.  Unchecking this option will give you the option to move the Linked Shape Instance.</li>\
	<li>ΔX / ΔY - When Use Linked Shape Position is unselected, these coordinates are used to move the Linked Shape Instance to a new location.  These are delta values, meaning they are relative to the original Linked Shape.</li>\
	<li>Linked Shape Name - A read-only value of the Linked Shape that this Linked Shape Instance is linked to.</li>\
	<li>Edit This Linked Shape (action button) - This will navigate to the Linked Shapes page, and allow you to make changes to the original Linked Shape.</li>\
	</ul>\
\
<a name='test_drive_page'></a>\
<h1>Test Drive Page</h1>\
The Test Drive page is where your font can be tried out in real time. Typing in the upper textbox will display that same text in your font face in the lower box.\
In the Attributes Panel, there is a list of Pangram buttons that will populate the upper textbox with sentences that contain all the letters of the alphabet. Similarly, there are buttons that will populate the upper textbox with certain character sets.\
The Options area lets you change how your font is drawn to the lower box, including options for Font Size, Line Spacing, and Character Spacing.\
The 'Generate PNG File' button will launch a new tab with an image of whatever is displayed in the lower box. Right-click the image to save the PNG file.\
\
<a name='font_settings_page'></a>\
<h1>Font Settings Page</h1>\
<b>Font Settings</b> deal with global attributes that affect all characters in your font.  Glyphr Studio uses the properties in the Font Settings section to display and edit shapes:\
	<ul>\
	<li>Character Proportions - Characters have a total height of 1000 Units, called Em Units.  The baseline of that character splits the upper and lower portions of the character vertically.  Input an Ascent Height, and the Descent Height will be calculated automatically.</li>\
	<li>Default Left Side Bearing - All characters have a small amount of space to their left that separates them from another character to their left.  Individual Left Side Bearings can be edited in the Attributes Panel of that character.  But, to make things easier, if a specific Left Side Bearing is not set, this Default Left Side Bearing will be applied.</li>\
	<li>Line Gap - This is the space between the bottom of the Em square of one line, and the top of the Em square of characters on a line underneath.</li>\
	</ul>\
<b>Character Ranges</b> allow you to specify which characters you would like to include in this font.  By default, Basic Latin is included.  Three other extended sets are available by checking the checkbox.  Or, you can add a custom range of characters.<br><br>\
<b>Open Type Properties</b> are a set of font metadata that is saved with the font file.  They include things like Font Name, Version Number, and other descriptive information.  Some of this information was auto-populated when the Glyphr Project was first created.\
\
<a name='project_settings_page'></a>\
<h1>Project Settings Page</h1>\
This information does not necessarily have a direct effect on the Font itself, but is used to help with designing your font.  This information is saved when a Glyphr Project is saved, and will be imported when a saved project is loaded.  Viewing the Grids and Guides can be toggled from the Actions section of the Attribute Panel.\
	<ul>\
	<li>Project Name - Initially, this project name is used as the Font Name as well.  But, the Glyphr Project can have a different name from the Font itself, which can be edited here.</li>\
	<li>Grid System - This can be helpful in visualizing shape dimensions, it draws a light gray grid across the Edit Canvas.  Input a number of divisions per Em.</li>\
	<li>X Height - another main dividing line within a character is the 'x height'.  It is a shorthand way of describing the average height of lowercase letters in a font.</li>\
	<li>Overshoot - Usually rounded shapes extend a small amount past guide lines, so rounded shapes visually appear to line up with squared shapes.  This will draw a light overshoot guideline past the Cap Height, X Height, and Baseline guidelines.</li>\
	<li>UI Behavior - these are user interface settings that you can adjust to your preference.</li>\
	</ul>\
\
<a name=''></a>\
<h1>Open Project Page</h1>\
There are two options for opening a new Glyphr Project: loading a previously-saved Glyphr Project file, or starting a new font from scratch. To load an existing Glyphr Project file, drag and drop the file onto the area indicated. To start a new project from scratch, edit the Project Name. The Font Name can be edited at any time from the Font Settings page.\
Loading or starting a new Glyphr Project will delete the current Glyphr Project, so be sure to save your existing project before loading or starting a new one.\
\
<a name='import_svg_page'></a>\
<h1>Import SVG Page</h1>\
\
<h2>Importing</h2>\
There are many pieces of design software that allow you to create SVG outlines.  For example, Adobe Illustrator, or its open-source equivalent Inkscape.  However you create the vector outlines of your characters, you can import them via SVG on this page.  Importing happens one character at a time, and  could be accomplished thusly:\
	<ol style='margin-left:20px;'>\
	<li>Select a character in the selection pane on the left.  This will be the destination for your imported outlines.  </li>\
	<li>Choose scaling and moving options.  Many times your design software coordinate system setup won't match Glyphr Studio's coordinate system.  Enter the specific height metrics for this character (Does it go above the x-height line, or below the baseline?  Is it a rounded character that has overshoot?) then select Scale and Move options.  Your character outlines will be re-sized and moved to the correct location.</li>\
	<li>If your file is a single character, you can drag and drop it onto the area specified.  Otherwise, copy and paste the SVG code into the code box.  The importing will not happen until the Import SVG button is pressed, so you can double-check your code before you proceed.</li>\
	<li>Pressing the Import SVG button will parse the SVG code, translate it into Glyphr Studio shapes and paths, and insert it into the specified character.  There is also a button to jump to the Character Edit page for the selected character, and a button to clear the code box.</li>\
	</ol>\
\
<h2>Notes about SVG</h2>\
SVG is a huge language that is capable of defining a much larger set of graphic design concepts than are needed for font glyph design.  As a result, Glyphr Studio ignores much of the SVG code that gets imported.<br><br>\
<b>What Glyphr Studio imports:</b>\
	<ul>\
	<li>Outline data from the following tags: path, rect, polygon, polyline, circle, and ellipse.</li>\
	<li>The following commands from the 'd' attribute in the path tag: Move To (Mm), Line To (Ll), Horizontal Line To (Hh), Vertical Line To (Vv), Bezier Line To (Cc), Smooth Bezier Line To (Ss), Close Path (Zz).</li>\
	</ul>\
<b>What Glyphr Studio ignores:</b>\
	<ul>\
	<li>The 'line' tag.  And, basically any tag not mentioned in the previous section.</li>\
	<li>All stroke attributes, like stroke-width.  Paths are assumed to be outlines of shapes.</li>\
	<li>The Arc To (Aa), Quadratic Bezier Line To (Qq), and Smooth Quadratic Bezier Line To (Tt) path commands in the 'd' attribute</li>\
	<li>The 'g' tag, and all its attributes.  Any transformations are ignored.</li>\
	<li>The 'svg' tag itself.  ViewBox, x, y, width, height attributes are all ignored.</li>\
	</ul>\
<b>Things to keep in mind:</b>\
	<ul>\
	<li>All lines or paths will be closed by Glyphr Studio.  AKA: the last point in any path will be connected with the first point.</li>\
	<li>Path direction (or 'winding') is not important in SVG, but it is important in glyph design.  Winding determines if two overlapping shapes both appear filled, or if one 'cuts out' from the other.  This can be toggled in the Shape Attributes Panel with the 'overlap mode' attribute.</li>\
	<li>Adobe Illustrator artboards don't get exported to SVG.  If you're importing from Illustrator, and not using the Scale option in Glyphr Studio, then imported shapes may end up in a surprising location.</li>\
	<li>Some rectangles that have been rotated in Adobe Illustrator export as SVG rectangles with a transform applied (which Glyphr Studio ignores).  You can remedy this by right-clicking the rotated rectangle in Illustrator, and selecting “Make Compound Path”.</li>\
	</ul>\
\
<a name='export_font_page'></a>\
<h1>Export Font Page</h1>\
This page has information about TTX, a program used to turn font files into XML, and XML files back into fonts.  Glyphr uses TTX as an intermediary step to create a font file.  Glyphr will generate a TTX XML file for you, which you can then use to generate an OpenType font file.<br><br>\
More information can be found at <a href='http://www.glyphrstudio.com/ttx/' target=_new>glyphrstudio.com/ttx</a>\
\
<h2>TTX support has been deprecated</h2>\
The main vision of Glyphr Studio is to enable people to easily create and save a font.  The second part of this vision, the saving part, is difficult to do straight from a browser.  There are many exciting projects underway in the open source community that will help to do this in the future... but they are not done yet.<br><br>\
Saving a TTX XML file was a stopgap measure on the road to 'easy saving'.  Glyphr Studio Beta 5 will support exporting a SVG Font.  The good news here is that there are free services online that will convert a SVG Font to any other type of font you want.  This is also a stopgap measure, but it is much easier than installing and running TTX.<br><br>\
As of Beta 4, support for TTX is deprecated - meaning we just barely kept it up and running, but it is not robust or fully tested.  In Beta 5 it will be removed completely and replaced with exporting SVG Fonts.  And, hopefully in a short period of time after Beta 5, we'll have an 'easy save' straight to a font file from your browser.\
\
<a name='about_page'></a>\
<h1>About Page</h1>\
Displays various information about the currently loaded Glyphr Project, and the current Glyphr Studio being used.  Glyphr Projects created with different versions of Glyphr Studio may not play nicely together.";

	content += "</div>";
	getEditDocument().getElementById("mainwrapper").innerHTML = content;
}