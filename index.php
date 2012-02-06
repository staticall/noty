<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>noty - a jquery notification plugin</title>
  <meta name="description" content="noty is a jquery plugin which is have too many options for display notification">
  <meta name="author" content="Nedim Arabacı (http://ned.im), Muhittin Özer (http://muhittinozer.com)">

  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="js/noty/css/jquery.noty.css">
  <link rel="stylesheet" href="js/libs/highlight/styles/dark.css">

  <!-- end CSS-->

  <link href='http://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold,bolditalic&amp;subset=latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>

  <script src="js/libs/modernizr-2.0.6.min.js"></script>
</head>

<body>

  <div id="container">
    <header>

			<a href="/noty" title="noty - a jquery notification plugin">
				<img src="img/noty_head.png" alt="noty - a jquery notification plugin" />
			</a>

    </header>
    <div id="main" role="main">

    	<div id="noty_queue">
    		<span>noty queue</span>
    		<ul id="noty_queue_list">
    		</ul>
    	</div>

			<ul id="examples">

				<li>
					<img src="img/noty_example.png" alt="Example 1" />
					<ul class="sub-list ex1">
						<li class="header">Top</li>
						<li class="alert ex1">Alert</li>
						<li class="error ex1">Error</li>
						<li class="success ex1">Success</li>
						<li class="confirm ex1">Confirm</li>
					</ul>
				</li>
				<li>
					<img src="img/noty_example-02.png" alt="Example 2" />
					<ul class="sub-list ex2">
						<li class="header">Bottom</li>
						<li class="alert ex2">Alert</li>
						<li class="error ex2">Error</li>
						<li class="success ex2">Success</li>
						<li class="confirm ex2">Confirm</li>
					</ul>
				</li>
				<li>
					<img src="img/noty_example-03.png" alt="Example 3" />
					<ul class="sub-list ex3">
						<li class="header">Center</li>
						<li class="alert ex3">Alert</li>
						<li class="error ex3">Error</li>
						<li class="success ex3">Success</li>
						<li class="confirm ex3">Confirm</li>
					</ul>
				</li>
				<li>
					<img src="img/noty_example-04.png" alt="Example 4" />
					<ul class="sub-list ex4">
						<li class="header">Left Corner</li>
						<li class="alert ex4">Alert</li>
						<li class="error ex4">Error</li>
						<li class="success ex4">Success</li>
						<li class="confirm ex4">Confirm</li>
					</ul>
				</li>
				<li>
					<img src="img/noty_example-05.png" alt="Example 5" />
					<ul class="sub-list ex5">
						<li class="header">Right Corner</li>
						<li class="alert ex5">Alert</li>
						<li class="error ex5">Error</li>
						<li class="success ex5">Success</li>
						<li class="confirm ex5">Confirm</li>
					</ul>
				</li>

			</ul>

			<div id="fork-me">

				<a href="https://github.com/needim/noty">
					<img style="position: absolute; top: 0; left: 0; border: 0;" src="https://a248.e.akamai.net/assets.github.com/img/bec6c51521dcc8148146135149fe06a9cc737577/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub">
				</a>

			</div>

    </div>

    <div id="documentation">

			<h1>Documentation</h1>

			<div id="usage">

				<section role="installation">

					<h3>Installation</h3>

					<div class="description">

						Include <a href="http://docs.jquery.com/Downloading_jQuery#Current_Release">jQuery latest release</a> in your header. The Google AJAX Libraries API can be used for this but you could also host the library yourself.

						<p>Download <span class="hl">noty</span> from the <a href="https://github.com/needim/noty/downloads">Github</a> and upload the files to your server.</p>
						Include <span class="hl">jquery.noty.js</span> and its dependancies below jQuery.
						Also add <span class="hl">jquery.noty.css</span> to your header.
						Your code should then be similar to this:

						<pre>
						<code class="html">
&lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="js/jquery.noty.js"&gt;&lt;/script&gt;

&lt;link rel="stylesheet" type="text/css" href="css/jquery.noty.css"/&gt;
						</code>
						</pre>

					</div>

				</section>

				<section role="creating-noty">

					<h3>Creating a noty</h3>

					<div class="description">

						We wrote a helper for creating noty easily. So you can use <span class="hl">noty(properties);</span> Just like this;

						<pre>
						<code>
// ex1 - alert
$('.ex1.alert').click(function() {
	noty({text: 'noty - a jquery notification library!'});
});
						</code>
						</pre>

					</div>

				</section>

				<section role="options">

					<h3>Noty Options</h3>

					<div class="description">

						Available options listed below.

						<table>
							<tr>
								<th>Name</th>
								<th>Type</th>
								<th class="default">Default</th>
								<th>Description</th>
							</tr>
							<tr>
								<td>text</td>
								<td>string</td>
								<td>''</td>
								<td>Notification message</td>
							</tr>
							<tr>
								<td>textAlign</td>
								<td><a href="http://www.w3.org/wiki/CSS/Properties/text-align">CSS/Properties/text-align</a></td>
								<td>center</td>
								<td>Alignment of message</td>
							</tr>
							<tr>
								<td>layout</td>
								<td>top|bottom|center|topLeft|topRight</td>
								<td>top</td>
								<td>Layout of notification. (Customizable with CSS)</td>
							</tr>
							<tr>
								<td>type</td>
								<td>alert|error|success</td>
								<td>alert</td>
								<td>Style of the notification. (Customizable with CSS)</td>
							</tr>
							<tr>
								<td>speed</td>
								<td>integer (ms)</td>
								<td>500</td>
								<td>Speed of open and close animations.</td>
							</tr>
							<tr>
								<td>timeout</td>
								<td>integer (ms)</td>
								<td>5000</td>
								<td>Duration of notification on screen.</td>
							</tr>
							<tr>
								<td>animateOpen</td>
								<td><a href="http://api.jquery.com/animate/">jQuery Animate Properties</a></td>
								<td>{height: 'toggle'}</td>
								<td>A map of CSS properties that the animation will move toward.</td>
							</tr>
							<tr>
								<td>animateClose</td>
								<td><a href="http://api.jquery.com/animate/">jQuery Animate Properties</a></td>
								<td>{height: 'toggle'}</td>
								<td>A map of CSS properties that the animation will move toward.</td>
							</tr>
							<tr>
								<td>easing</td>
								<td><a href="http://api.jquery.com/animate/#easing">jQuery Easing Functions</a></td>
								<td>swing</td>
								<td>More easing functions are available with the use of plugins like <a href="http://jqueryui.com/">jQuery UI</a>.</td>
							</tr>
							<tr>
								<td>closable</td>
								<td>boolean</td>
								<td>true</td>
								<td>Enables the close button when set to true.</td>
							</tr>
							<tr>
								<td>force</td>
								<td>boolean</td>
								<td>false</td>
								<td>Adds notification to the beginning of queue when set to true.</td>
							</tr>
							<tr>
								<td>buttons</td>
								<td>false|array</td>
								<td>false</td>
								<td>An array of buttons. <a href="#buttons">Like this &raquo;</a></td>
							</tr>
							<tr>
								<td>onShow</td>
								<td>false|function</td>
								<td>false</td>
								<td><a href="#callbacks">onShow Callback &raquo;</a></td>
							</tr>
							<tr>
								<td>onClose</td>
								<td>false|function</td>
								<td>false</td>
								<td><a href="#callbacks">onClose Callback &raquo;</a></td>
							</tr>
						</table>

					</div>

				</section>

				<section role="buttons">

					<h3 id="buttons">Buttons</h3>

					<div class="description">

						We can set button objects with an array like above;

						<pre>
						<code>
// ex1 - confirm
$('.ex1.confirm').click(function() {
	noty({
		text: 'noty - a jquery notification library!',
		buttons: [
			{type: 'button green', text: 'Ok', click: function() { /**/ } },
			{type: 'button pink', text: 'Cancel', click: function() { /**/ } }
		],
		closable: false,
		timeout: false
	});
});
						</code>
						</pre>

						Available button properties are listed below.

						<table>
							<tr>
								<th>Name</th>
								<th>Type</th>
								<th>Description</th>
							</tr>
							<tr>
								<td>type</td>
								<td>string</td>
								<td>Button class</td>
							</tr>
							<tr>
								<td>text</td>
								<td>string</td>
								<td>Button text</td>
							</tr>
							<tr>
								<td>click</td>
								<td>function</td>
								<td>Callback function of button</td>
							</tr>
						</table>

					</div>

				</section>

				<section role="callbacks">

					<h3 id="callbacks">Callbacks</h3>

					<div class="description">

						Noty plugin have 2 callback option for now. We will add more callback asap.

						<table>
							<tr>
								<th>Name</th>
								<th>Description</th>
							</tr>
							<tr>
								<td>onShow</td>
								<td>Triggered when notification open animation finished.</td>
							</tr>
							<tr>
								<td>onClose</td>
								<td>Triggered when notification close animation finished.</td>
							</tr>
						</table>

					</div>

				</section>

				<section role="api">

					<h3>Noty API</h3>

					<div class="description">

						<table>
							<tr>
								<th>Function</th>
								<th>Params</th>
								<th>Description</th>
							</tr>
							<tr>
								<td>$.noty.clearQueue()</td>
								<td>none</td>
								<td>Clears the notification queue. (<a class="api-func" title="$.noty.clearQueue();" href="">run</a>)</td>
							</tr>
							<tr>
								<td>$.noty.close()</td>
								<td>none</td>
								<td>Close the current notification. (<a class="api-func" title="$.noty.close();" href="">run</a>)</td>
							</tr>
							<tr>
								<td>$.noty.closeAll()</td>
								<td>none</td>
								<td>Close all notifications. (<a class="api-func" title="$.noty.closeAll();" href="">run</a>)</td>
							</tr>
						</table>

					</div>

				</section>

				<section role="commit-history">

					<h3>Github Commit History</h3>

					<div class="description">

						<?php
								$ch = curl_init();

								curl_setopt($ch, CURLOPT_URL, 'https://api.github.com/repos/needim/noty/commits');
								curl_setopt($ch, CURLOPT_HEADER, 0);
								curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
								curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
								curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,  2);

								$response = json_decode(curl_exec($ch));
								curl_close($ch);
						?>

						<table>
							<tr>
								<th>Committer</th>
								<th>Message</th>
								<th class="default">Date</th>
								<th>Details</th>
							</tr>

							<?php foreach($response as $commit): ?>

								<tr>
									<td><?php echo $commit->commit->author->name ?></td>
									<td><?php echo $commit->commit->message ?></td>
									<td><?php echo date('d.m.Y H:i', strtotime($commit->commit->author->date)); ?></td>
									<td><a href="https://github.com/needim/noty/commit/<?php echo $commit->sha ?>" title="Commit Details">view &raquo</a></td>
								</tr>

							<?php endforeach; ?>

						</table>

					</div>

				</section>

			</div>

		</div>

    <footer>

    </footer>
  </div> <!--! end of #container -->


  <!-- scripts concatenated and minified via ant build script-->
  <script src="js/libs/jquery-1.6.2.min.js"></script>
  <script src="js/libs/jquery-ui-1.8.17.easing.min.js"></script>
  <script defer src="js/plugins.js"></script>
  <script defer src="js/script.js"></script>
  <script src="js/libs/highlight/highlight.pack.js"></script>
  <script>
	  hljs.tabReplace = '  ';
	  hljs.initHighlightingOnLoad();
  </script>

  <script defer src="js/noty/js/jquery.noty.js"></script>

  <!-- end scripts-->

	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-28737816-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>


  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

</body>
</html>