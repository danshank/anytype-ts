import { I } from 'ts/lib';

const sc = 'bgColor bgColor-grey textColor textColor-red nw'

export default [

	{ type: I.BlockType.IconPage, icon: '👋' },

	{ style: I.TextStyle.Title, text: `Updates for 8 December, 2020` },

	{ text: `Happy holidays from the Anytypers!` },
	{ text: `As we near the end of 2020, we want to say thanks for all your support this year.` },
	{ text: `There are many reasons to be optimistic about 2021. For us, we’re looking forward to databases, templates, and a discussion about how objects work together.` },
	{ text: `This is a major Anytype update with sync status, security improvements, and bug fixes. Overall, we think this release should provide you a much-improved experience.` },

	{ style: I.TextStyle.Header3, text:  `Sync statuses: ` },
	{ style: I.TextStyle.Bulleted, text: `On the top-right corner of Anytype, you can find the sync status summary of every page.` },
	{ style: I.TextStyle.Bulleted, text: `You can now dive into the details by clicking on the status and see the interaction with the backup node and other devices you use.` },
	{ style: I.TextStyle.Bulleted, text: `For each device, you will see when the last direct (P2P) synchronization took place. Since we live in a distributed world, data can be transferred directly from the device or through a backup node if it was connected this way. ` },
	{ style: I.TextStyle.Bulleted, text: `The dashboard pages and links to pages have received special states also to help you better understand the sync status.` },
	{ text: `<span class="${sc}">Updates requested</span> status calculation starts to work from this release.` },

	{ style: I.TextStyle.Header3, text:  `Further Enhancements:` }
	{ style: I.TextStyle.Bulleted, text: `Your mnemonic passphrase is now stored in your system’s keychain.` },
	{ style: I.TextStyle.Bulleted, text: `We disabled the noise security protocol and enabled the latest TLS, rewrote initial sync logic, and now we have more successful connections between devices. This means new objects will sync faster. ` },
	{ text: `We’re currently working on another major update which should increase the sync success rate even more.` },

	{ style: I.TextStyle.Header3, text:  `Bug fixes:` },
	{ style: I.TextStyle.Bulleted, text: `We fixed a bug that prevented some users from mentioning their pages. Thanks, Mukanzi!` },
	{ style: I.TextStyle.Bulleted, text: `We’ve fixed the Anytype icon and hover state on Windows. Thanks, Ichimga!` },
	{ style: I.TextStyle.Bulleted, text: `Page top-rights icons clips over rendered above the scroll bar in modal views in narrow resolutions. Thanks, BGray!` },
  { style: I.TextStyle.Bulleted, text: `The <span class="${sc}"><</span> or <span class="${sc}">></span> symbols don't disappear anymore. Thanks, George!` },
  { style: I.TextStyle.Bulleted, text: `The URL doesn't paste in the URL dialog window if you try to create a link in a text by <span class="${sc}">Cmd + K</span> and <span class="${sc}">Cmd + V</span> combination. Thanks, Hayk!` },
	{ style: I.TextStyle.Bulleted, text: `Holding left click and scrolling at the same time was laggy. Thanks again, Hayk!` },
	{ style: I.TextStyle.Bulleted, text: `After pasting the URL link the menu could drop the carriage to the beginning of the block and paste it there.` },
	{ style: I.TextStyle.Bulleted, text: `Carriage drops to the beginning of the line after setting the markup color.` },
	{ style: I.TextStyle.Bulleted, text: `Dividers have lost the “turn into” option.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 20 November, 2020` },

  { text: `New encryption. We now using AES with stream encryption with CFB mode. Old encryption could increase the RAM consumption to 13,46 GB with 4GB file and could even crash Anytype. Now it takes less than 100 megabytes with any size of the file. For the best performance, you need to be up-to-date in each Desktop app and use the latest Android version. It starts to work with the new files added to Anytype, so, please, re-upload big files.` },

	{ style: I.TextStyle.Header3, text:  `Enhancements:` },
	{ style: I.TextStyle.Bulleted, text: `Turn into now can turn page links into mentions with other text styles.` },
	{ style: I.TextStyle.Bulleted, text: `We now show the loading object state for pages that downloading from the remote node.` },

	{ style: I.TextStyle.Header3, text:  `Bug fixes:` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">Shift + Enter</span> doesn’t create a new line within a block. Thanks, Poochy!` },
	{ style: I.TextStyle.Bulleted, text: `Markup menu remains open when click outside the editor container. Thanks, BGray!` },
	{ style: I.TextStyle.Bulleted, text: `The text disappears if you type and press the system button back after typing and open the page again. Thanks, BGray!` },
	{ style: I.TextStyle.Bulleted, text: `Markup menu remains open when click outside the editor container. Thanks, BGray!` },
	{ style: I.TextStyle.Bulleted, text: `Clipboard. Dismiss after pasting an URL gets pasted as plain text not as URL. Thanks, Luuk!` },
	{ style: I.TextStyle.Bulleted, text: `Clipboard. Columns cut and copy part of the text block doesn't work properly.` },
	{ style: I.TextStyle.Bulleted, text: `Mention. Several creation and deletion attempts can break the style range.` },
	{ style: I.TextStyle.Bulleted, text: `Selection with shift pressed. If there is a carriage inside the block and you press shift and click on another block, the first block should also become selected. ` },
	{ style: I.TextStyle.Bulleted, text: `Selection with shift should work from bottom to top and select all blocks between. If users starting to click in another direction the selection should always extend.` },
	{ style: I.TextStyle.Bulleted, text: `The search window doesn't match with the search pane frame.` },
	{ style: I.TextStyle.Bulleted, text: `Undo / Redo can return events with wrong order.` },
	{ style: I.TextStyle.Bulleted, text: `You cannot open the page from the dashboard if you click in the icon zone.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 30 October, 2020` },
	{ text: `This is a technical minor release with bug fixes and minor enchancements.` },

	{ style: I.TextStyle.Header3, text:  `Enhancements:` },
	{ style: I.TextStyle.Bulleted, text: `The page icon is now moving with the title, so you can make a page with a centered layout.` },
	{ text: `<img src="./img/help/centered.png" class="full">` },
	{ style: I.TextStyle.Bulleted, text: `We moved page cover controls position in a more convenient place.` },
	{ style: I.TextStyle.Bulleted, text: `Mentions now have the ability to break into a new line.` },
	{ style: I.TextStyle.Bulleted, text: `We have enabled dropping blocks into the page.` },
	{ style: I.TextStyle.Bulleted, text: `App usage survey pop-up was tuned not to show for new users.` },

	{ style: I.TextStyle.Header3, text:  `Bug fixes:` },
	{ style: I.TextStyle.Bulleted, text: `Functions like move to, duplicate, delete, and align didn't work in block’s turn into menu.` },
	{ style: I.TextStyle.Bulleted, text: `The search on the page did not highlight the found data in the text where the styles were added.` },
	{ style: I.TextStyle.Bulleted, text: `In-page search position is now fixed to the top.` },
	{ style: I.TextStyle.Bulleted, text: `In-page search had no possibility to find special characters.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 08 October, 2020` },
	{ text: `We’re taking another step towards our beta today, with the launch of our <a href="https://community.anytype.io/">community forum</a>. It will be a valuable resource for features, feedback and support. We hope it will also a place for you to do what you do best: discuss the future of the web and building your very own digital brain. Your invite code should wait you in mailbox, if nothing there please write us <a href="mailto:hello@anytype.io">hello@anytype.io</a>.` },

	{ style: I.TextStyle.Header3, text:  `Enhancements:` },
	{ style: I.TextStyle.Bulleted, text: `The title can be aligned, has color and background now.` },

	{ style: I.TextStyle.Header3, text:  `Bug fixes. Not anymore:` },
	{ style: I.TextStyle.Bulleted, text: `Document structure can brake in some cases and prevent the page from opening.` },
	{ style: I.TextStyle.Bulleted, text: `Clipboard. Can't copy and paste part of the text block in Anytype.` },
	{ style: I.TextStyle.Bulleted, text: `Clipboard. Highlighted, checkbox, toggle, and header type blocks with content become text type if you paste the text into them.` },
	{ style: I.TextStyle.Bulleted, text: `Clipboard. Copying block from one column to another place leads to layout brake.` },
	{ style: I.TextStyle.Bulleted, text: `Drag and drop. Moving blocks with complex structures can't be done in some cases.` },
	{ style: I.TextStyle.Bulleted, text: `Links without URL schema can't be opened in some cases.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },


	{ style: I.TextStyle.Header1, text: `Updates for 05 October, 2020` },
	{ text: `This is one for the history books. With Anytype 0.16, users can now travel through time to recover previous versions of their pages. Use <span class="${sc}">History</span> on the page's menu in the top-right corner.` },

	{ style: I.TextStyle.Header3, text:  `Enhancements:` },
	{ style: I.TextStyle.Bulleted, text: `New page inside another one will open in modal view. All other pages can be opened this way with <span class="${sc}">Shift + Click</span>.` },
	{ style: I.TextStyle.Bulleted, text: `Menu bar icons now alternate between light and dark.` },
	{ style: I.TextStyle.Bulleted, text: `You can @mention new page just by pressing enter after writing a name.` },
	{ style: I.TextStyle.Bulleted, text: `We've made the main logo clickable and display search as it works on other pages.` },
	{ style: I.TextStyle.Bulleted, text: `We've changed header icons set a bit.` },
	{ style: I.TextStyle.Bulleted, text: `The document building algorithm was improved.` },
	{ style: I.TextStyle.Bulleted, text: `Pressing <span class="${sc}">CMD/CTRL + S</span> will now focus on the search bar, making it even easier for you to find what you’re looking for.` },

	{ style: I.TextStyle.Header3, text:  `Bug fixes:` },
	{ style: I.TextStyle.Bulleted, text: `Sometimes speedy typists would type so quickly, Anytype wouldn’t delete their text. That bug has been fixed with this build, so you can take it back to 88.` },
	{ style: I.TextStyle.Bulleted, text: `Changing the text colour in-block will no longer return the carriage to the beginning of the text string.` },
	{ style: I.TextStyle.Bulleted, text: `When selecting a block with nested blocks, those nested blocks will now also be selected.` },
	{ style: I.TextStyle.Bulleted, text: `Users with email addresses on newer TLDs reported issues when trying to submit feedback. We’ve updated our email address validation.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 23 September, 2020` },

	{ text: `Thank you to our incredible alpha testers for helping us build Anytype. In this latest build, we’ve introduced a short — 1 minute — survey. Your feedback is appreciated, and helps make our product better! ` },

	{ style: I.TextStyle.Header3, text:  `Enhancements:` },
	{ style: I.TextStyle.Bulleted, text: `Enhanced syncing time and page retriving speed up to 100%.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">Create new page</span> from @mention will create it in-line with written name without opening.` },
	{ style: I.TextStyle.Bulleted, text: `Block's drag-n-drop now work faster, dropping areas was tuned for better usage.` },
	{ style: I.TextStyle.Bulleted, text: `Emoji's and searching lists rendering were boosted.` },
	{ style: I.TextStyle.Bulleted, text: `Our updater has been… <i>sigh</i> updated. Download checks will take place in the background, and you will have the option to update now or later.` },
	{ style: I.TextStyle.Bulleted, text: `☑️Typing <span class="${sc}">/todo</span> will now create a to-do list!` },
	{ style: I.TextStyle.Bulleted, text: `Windows: Close, Restore and Minimise buttons are now more responsive. ` },
	{ style: I.TextStyle.Bulleted, text: `Search results can now be selected using the keyboard’s up/down arrows and the tab key.` },
	{ style: I.TextStyle.Bulleted, text: `The Highlighted block can have right align now.` },

	{ style: I.TextStyle.Header3, text:  `Bug fixes:` },
	{ style: I.TextStyle.Bulleted, text: `Windows: <span class="${sc}">Alt + F4</span> will now correctly close the application.` },
	{ style: I.TextStyle.Bulleted, text: `Windows: Entire blocks, when selected, can now be removed using the <span class="${sc}">Delete</span> key.` },
	{ style: I.TextStyle.Bulleted, text: `Speedy typists noticed the sheer speed of their speedy keys could cause the @mention menu to break, sometimes leading to data loss. This has now been fixed. Feel free to take that typing past 88… wpm.` },
	{ style: I.TextStyle.Bulleted, text: `Irregularities and inconsistencies with both selecting and deselecting text inside blocks have been found and fixed.` },
	{ style: I.TextStyle.Bulleted, text: `A bug where pressing <span class="${sc}">CTRL + S</span> to access search caused the menu to flicker has been fixed.` },
	{ style: I.TextStyle.Bulleted, text: `Unruly carriages no longer return to the start of the block when using @mentions.` },
	{ style: I.TextStyle.Bulleted, text: `Emoji used for pages are now rendering correctly after being synced across devices.` },
	{ style: I.TextStyle.Bulleted, text: `After the recovery from the backup server, some images couldn't be loaded. Fixed.` },
	{ style: I.TextStyle.Bulleted, text: `Links are not hiding from the dashboard if are too many.` },
	{ style: I.TextStyle.Bulleted, text: `Fast login-logout could lead app to crash. Fixed.` },
	{ style: I.TextStyle.Bulleted, text: `Dashboard has now been removed from search.` },
	{ style: I.TextStyle.Bulleted, text: `We have removed a bug which allowed users to create a PIN shorter than 6 characters.` },
	{ style: I.TextStyle.Bulleted, text: `A bug which allowed users to access the search menu from the PIN entry screen has been squashed.` },
	{ style: I.TextStyle.Bulleted, text: `When using <span class="${sc}">CMD/CTRL + L</span> for links, the dialog will now open below each time it was used.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 28 August, 2020` },

	{ style: I.TextStyle.Header3, text:  `We are happy to introduce <b>Anytype for Linux!</b>` },

	{ text: `To run the application in Linux OS check out the <a href="https://discourse.appimage.org/t/how-to-run-an-appimage/80">"How to run AppImage instruction"</a>. New versions of Anytype will come with separate <span class="${sc}">.AppImage</span> files automatically. For updates, you just need to use a new one. Later we will add an app in Snap.` },
	{ text: `The following platforms are verified to be able to run the Anytype:` },
	{ style: I.TextStyle.Bulleted, text: `Ubuntu 12.04 and newer` },
	{ style: I.TextStyle.Bulleted, text: `Fedora 21` },
	{ style: I.TextStyle.Bulleted, text: `Debian 8` },

	{ style: I.TextStyle.Header3, text:  `New features:` },
	{ style: I.TextStyle.Bulleted, text: `The Windows menu bar was redesigned to take up less space and look better.` },
	{ style: I.TextStyle.Bulleted, text: `We added new keyboard shortcuts and a new page for faster memorizing and usage. Now you can use the keyboard to get into the home screen, delete text to the left, and much more!` },
	{ style: I.TextStyle.Bulleted, text: `You can search text in-page with <span class="${sc}">CMD/CTRL + F</span> and via page menu.` },
	{ style: I.TextStyle.Bulleted, text: `Manual check for software updates now has a window with status.` },
	{ style: I.TextStyle.Bulleted, text: `Our feedback section now has templates for different situations.` },
	{ style: I.TextStyle.Bulleted, text: `Enhanced syncing for pinned files and finding peers.` },

	{ style: I.TextStyle.Header3, text:  `Bug fixes:` },
	{ style: I.TextStyle.Bulleted, text: `An inability to delete nested paragraphs.` },
	{ style: I.TextStyle.Bulleted, text: `No in-app images in Linux and Windows version.` },
	{ style: I.TextStyle.Bulleted, text: `When setting the cursor from the last block to the top the page could scroll down.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 14 August, 2020` },

	{ text: `This release brings several improvements to cross-device syncing and reduces the amount of disk space needed. This version comes with a new data format for your pages, and is a huge step towards further collaboration features in the future.<br>` },
	{ text: `Right now, however, it means your page history will use <b>much</b> less space, changes that you made in one device will come to another <b>online without having to refresh</b>.` },

	{ style: I.TextStyle.Header3, text: `🔔What’s changed?` },
	{ style: I.TextStyle.Bulleted, text: `You can now paste images from the clipboard into Anytype blocks.` },
	{ style: I.TextStyle.Bulleted, text: `We’ve added a progress bar for users who import from Notion. <br>So now you can track the progress` },
	{ style: I.TextStyle.Bulleted, text: `Copying lists with nested items now pastes in the correct structure. ` },
	{ style: I.TextStyle.Bulleted, text: `Fixed ability to copy and paste the whole block. ` },
	{ style: I.TextStyle.Bulleted, text: `A bug that allowed users to bypass the PIN screen through the Help button <br> has been fixed.` },
	{ style: I.TextStyle.Bulleted, text: `When using markup — bold, italics, etc — made with multiple blocks selected, it now can be reversed by using the same shortcut.` },
	{ style: I.TextStyle.Bulleted, text: `We’ve fixed a bug that changed the markup of text after a mention is inserted.` },
	{ style: I.TextStyle.Bulleted, text: `One user noticed an issue with the feedback submission process, <br>which we have now fixed. ` },
	{ style: I.TextStyle.Bulleted, text: `Drag-and-drop with nested blocks has been improved. Users should no longer encounter disappearing blocks.` },
	{ style: I.TextStyle.Bulleted, text: `Finally, for any users wondering why the carriage was disappearing in an empty block, it has been found and safely returned!` },
	{ style: I.TextStyle.Bulleted, text: `Updating to the latest version of the Anytype alpha should go smoothly, without several restarts as we have fixed an issue causing the old app not to close during the update process.` },
	{ style: I.TextStyle.Bulleted, text: `Links restrictions. Ability to set a link or move on the page itself removed.  <br>Home option removed from linking on pages. Archived pages removed from navigation, search, and mentions. ` },

	{ style: I.TextStyle.Header3, text: `🐁 ≠ ⌨️ Less mouse, less distractions.` },
	{ text: `You can use the navigation pane with keyboard keys:` },
	{ style: I.TextStyle.Bulleted, text: `Easily switch pages with the arrow keys.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">←</span> and <span class="${sc}">→</span> arrow transfers the selection to links, <span class="${sc}">↑</span> and <span class="${sc}">↓</span> arrows transitions between the same level, and <span class="${sc}">Enter</span> is confirmation.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">Tab</span> & <span class="${sc}">Shift</span> + <span class="${sc}">Tab</span> can also be used to select objects. This is similar to the browser’s selection of elements.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">↑</span> and <span class="${sc}">↓</span> arrows, <span class="${sc}">Tab</span> & <span class="${sc}">Shift</span> + <span class="${sc}">Tab</span> nnow transition your selection between options in the search menu without needing any additional filtration.` },

	{ style: I.TextStyle.Header3, text: `🙏🏻Acknowledgements` },

	{ text: `Anytype releases wouldn’t be possible without a multitude of people, and our thanks go out to all of our brilliant alpha users and bug reporters.` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 24 July, 2020` },
	{ text: `Fixed syncing between devices. You finally can transfer data to another computer with the same mnemonic phrase. It's a simple implementation, so it can still lead to modification loss in case of concurrent changes in the same document.` },
	{ text: `To maximize the probability of successful synchronization we recommend updating both devices to this version.` },
	{ style: I.TextStyle.Header3, text: `Small features were implemented:` },
	{ style: I.TextStyle.Bulleted, text: `You can use shortcuts to go back and forward. To open the previous page from your history use <span class="${sc}">CMD + [</span> for macOS or <span class="${sc}">Alt + ←</span> for Windows. <span class="${sc}">CMD + ]</span> for macOS or <span class="${sc}">Alt + →</span> for Windows for another direction.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">CMD + /</span> now works with multiple blocks.` },
	{ style: I.TextStyle.Bulleted, text: `Powertool <span class="${sc}">/</span> and mention <span class="${sc}">@</span> menu auto-close when you continue typing with no results.` },
	{ style: I.TextStyle.Bulleted, text: 'Type <span class="bgColor bgColor-grey textColor textColor-red nw">```</span> to add a new code block.' },
	{ style: I.TextStyle.Bulleted, text: `We made dashboard style update and new geometric wallpapers.` },
	{ style: I.TextStyle.Bulleted, text: `Pin code verification was added in case you want to change or turn it off.` },
	{ style: I.TextStyle.Bulleted, text: `App saves its size and position on exit. App window now has a minimum width.` },
	{ style: I.TextStyle.Header3, text: `Sneaky bugs were fixed:` },
	{ style: I.TextStyle.Bulleted, text: `Redo <span class="${sc}">CMD + Shift + Z</span> is working properly now.`  },
	{ style: I.TextStyle.Bulleted, text: `Fixed shortcut for turn-into menu. It was launching with <span class="${sc}">?</span>, <span class="${sc}">,</span> in some keyboards.` },
  { style: I.TextStyle.Bulleted, text: 'Splitting and merging blocks could lead to an unwanted state with disappearing symbols when typing fast. This problem was solved. ' },
	{ style: I.TextStyle.Bulleted, text: `Menu. Filtering. When using search the first element gets selected by default now.` },
	{ style: I.TextStyle.Bulleted, text: `The carriage could be moved to the new block after it was positioned it the title without a glitch.` },
	{ style: I.TextStyle.Bulleted, text: `Pincode input saving all the symbols when typing fast.` },
	{ style: I.TextStyle.Bulleted, text: `Image. The bigger picture view was fixed.` },
	{ style: I.TextStyle.Bulleted, text: `Creating a new block (pressing <span class="${sc}">Enter</span>) lead to page jump when the page has been scrolled down. Now it's ok!` },

	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 15 July, 2020` },
	{ style: I.TextStyle.Header3, text: `Windows support is now (finally) available!` },
	{ text: `Also we have a list of fixed bugs and features & improvements implemented:` },
	{ style: I.TextStyle.Bulleted, text: `Chinese symbols input issues. Tested on Pinyin and Cangjie. For now, we use space and enter as symbol insertion, later we would implement numbers.` },
	{ style: I.TextStyle.Bulleted, text: `German keyboard shortcuts issue is now fixed. Try <span class="${sc}">CMD + /</span> (<span class="${sc}">CMD + Shift + 7</span>) one more time.` },
	{ style: I.TextStyle.Bulleted, text: `Phantom lists fixed: "Working with a list could lead to some elements disappearing when working with indentation".` },
	{ style: I.TextStyle.Bulleted, text: `You can finally use tab in the code block.` },
	{ style: I.TextStyle.Bulleted, text: `Code blocks now support even more languages!` },
	{ style: I.TextStyle.Bulleted, text: `"Can't close a modal window on outside-click when 2 modals are open." Fixed.` },
	{ style: I.TextStyle.Bulleted, text: `We've tuned the behaviour of update requests.` },
	{ style: I.TextStyle.Bulleted, text: `Split-merge text blocks in the editor. The carriage now set between the merged blocks.` },
	{ style: I.TextStyle.Bulleted, text: `Updates to the What's New page.` },
	{ style: I.TextStyle.Bulleted, text: `Copying and pasting text from external sources has been fixed.` },
	{ style: I.TextStyle.Bulleted, text: `"Setting some kind of markup leads to whole block deletion." Not anymore!` },
	{ style: I.TextStyle.Bulleted, text: `Fixed first-element highlighting in the menus.` },
	{ style: I.TextStyle.Bulleted, text: `<span class="${sc}">CTRL + N</span> and <span class="${sc}">CTRL + P</span> shortcuts now available to work with lines in macOS.` },
	{ style: I.TextStyle.Bulleted, text: `Import from Notion now supports larger amounts of data.` },
	{ style: I.TextStyle.Bulleted, text: `Turn Into, Align, and Color now works on multiple levels of indentation.` },
	{ style: I.TextStyle.Bulleted, text: `macOS app closing into the Dock by default.` },
	{ text: `... and many other small improvements! ` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 10 June, 2020` },
	{ text: `We value your time and develop a great timesaver for you — now you can transfer data from other sources into Anytype!` },
	{ text: `Open settings in the dashboard or use <span class="${sc}">File → Import</span> in the System menu and try. You can import all your data from Notion with the same structure for now, later we will develop more sources.` },
	{ text: `<img src="./img/help/import.png" class="full">` },
	{ text: `A friendly reminder. Without any imports, you can save note from another app or an article from Wikipedia, and store it forever on your computer. Just copy it there and paste into Anytype. <i>Voila!<i>` },
	{ text: `Please, write us what you think and what source you want to import in&nbsp;Anytype!` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 29 May, 2020` },
	{ style: I.TextStyle.Header3, text: `Mention` },
	{ text: `Now Anytype allows you to refer to any page right in your content.` },
	{ text: `Simply insert the <span class="${sc}">@</span> sign and start typing the name of a page you want to refer to.` },
	{ text: `You can mention any page anywhere and it will build a relationship between pages. All&nbsp;mentions will be shown in the navigation panel. It’s just a more convenient way to connect any pages inside Anytype. Hope you enjoy it and we look forward to your suggestions on how we could make it better.` },
	{ text: `<img src="./img/help/mention.gif" class="full mention">` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

	{ style: I.TextStyle.Header1, text: `Updates for 6 May, 2020` },
	{ style: I.TextStyle.Header3, text: `Meet the new navigation` },
	{ text: `All the knowledge we have in our brains organized associatively, not hierarchically. Our&nbsp;brain, in a way, is interconnected wiki. We have multiple connections between ideas or thoughts in our brains - it’s the way we navigate through our memories.` },
	{ text: `We introduce bi-directional links that allow you to connect ideas freely; you can reuse objects and create any information structure you desire.</br>` },
	{ text: `Now you can use a three-line icon <span class="icon nav"></span> on the top left of the application or press <span class="${sc}">CMD + O</span> to see bi-directional links between pages and navigate through them.` },
	{ text: `You can press <span class="${sc}">CMD + S</span> and search the right page by name or information in the&nbsp;first&nbsp;paragrapgh.` },
	{},
	{ text: `<b>Now you can stop segmenting and limiting the way you connect your thoughts — just link the pages and flesh everything out more naturally.</b>` },
	{ type: I.BlockType.Div, style: I.DivStyle.Dot },

  { style: I.TextStyle.Header1, text: `Updates for 03 March, 2020` },
	{ style: I.TextStyle.Header3, text: `Introducing Anytype` },
	{ text: `We upgraded the design and backed it up with cutting edge technologies to make your experience safe, secure, and convenient.` },
	{ text: `<span class="bgColor bgColor-yellow">This version of Anytype is suitable for personal usage only</span>. In the next versions we’ll add collaborative functionality.` },

	{ style: I.TextStyle.Header3, text: `Available features` },
	{ style: I.TextStyle.Bulleted, text: `Editor with different kinds of blocks you need to work with notes, ideas, collections, knowledge bases, receipts, diaries, to-do lists, travel plans;` },
	{ style: I.TextStyle.Bulleted, text: `Media content. Organize your space with playable videos, photos, and web bookmarks;` },
	{ style: I.TextStyle.Bulleted, text: `Drag and drop everything in Anytype. Move blocks and create columns. Create pages from your desktop folders. Copy & paste content from other resources;` },
	{ style: I.TextStyle.Bulleted, text: `Page styling. Cover the page with a picture, use emoji or custom image to enhance appearance;` },
	{ style: I.TextStyle.Bulleted, text: `Dashboard. Add your favorite documents, sort them, and archive to reach them in&nbsp;a&nbsp;second.` },
	{},
	{ text: `<b>Create a new home for your information — private and free</b>.` },
	{},
	{ text: `Thank you for building a new web together, writing us a review, reporting a bug, or making a feature request, moving all of us forward. 🙏` },
	{ text: `Don’t forget to <span class="textColor textColor-red">save your seed phrase</span>  to save access to all your private data. All&nbsp;the&nbsp;new features will appear in automatic updates.` }
];
