---
title: 解决Mac升级为Big Sur系统后 Homebrew失效
date: 2021-04-09 10:45:07
tags:
---

```bash
 ~ brew
Traceback (most recent call last):
	11: from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in `<main>'
	10: from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in `require_relative'
	 9: from /usr/local/Homebrew/Library/Homebrew/global.rb:29:in `<top (required)>'
	 8: from /usr/local/Homebrew/Library/Homebrew/vendor/portable-ruby/2.6.3/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
	 7: from /usr/local/Homebrew/Library/Homebrew/vendor/portable-ruby/2.6.3/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
	 6: from /usr/local/Homebrew/Library/Homebrew/os.rb:3:in `<top (required)>'
	 5: from /usr/local/Homebrew/Library/Homebrew/os.rb:21:in `<module:OS>'
	 4: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:58:in `prerelease?'
	 3: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:24:in `version'
	 2: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:24:in `new'
	 1: from /usr/local/Homebrew/Library/Homebrew/os/mac/version.rb:26:in `initialize'
/usr/local/Homebrew/Library/Homebrew/version.rb:368:in `initialize': Version value must be a string; got a NilClass () (TypeError)

brew update-reset
==> Fetching /usr/local/Homebrew...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

==> Resetting /usr/local/Homebrew...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

==> Fetching /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

==> Resetting /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

==> Fetching /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

==> Resetting /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

==> Fetching /usr/local/Homebrew/Library/Taps/homebrew/homebrew-services...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

==> Resetting /usr/local/Homebrew/Library/Taps/homebrew/homebrew-services...
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

xcode-select --install
xcode-select: note: install requested for command line developer tools
```
