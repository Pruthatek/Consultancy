import React, {useState} from 'react'

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    window.onload = function () {


		// Google translate
		const googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: "en",
					autoDisplay: true,
				},
				"google_translate_element"
			);
		};
		var addScript = document.createElement("script");
		addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
		document.body.appendChild(addScript);
		window.googleTranslateElementInit = googleTranslateElementInit;
		setInterval(() => {
			try {

				document.getElementById(":1.container").style.transform = "scale(0)";
				document.getElementById(":1.container").parentElement.style.transform = "scale(0)";
				document.getElementsByTagName("body")[0].style.top = "0px";
				document.getElementById("google_translate_element").style.transform = "scale(0)";
			} catch (e) { }
		}, 500);
	};
  return (
    <div>
      <div className="absolute top-0 left-0 scale-0 -translate-y-[400%] w-0 h-0">
				<div id="google_translate_element"></div>
			</div>

			<div className="flex items-center gap-1 relative cursor-pointer">
				{/* language */}
				<div
					className="flex items-center gap-1"
					onClick={() => {
						document.getElementById("languageOverlay").classList.toggle("scale-y-0");
						document.getElementById("languageOverlay").classList.toggle("opacity-0");

					}}
					onBlur={() => {
						document.getElementById("languageOverlay").classList.add("scale-y-0");
						document.getElementById("languageOverlay").classList.add("opacity-0");
					}}
				>

					{/* <svg width="22" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.9375 14.4556C9.39558 17.6218 10.4931 19.8517 11.7742 19.8517C13.0553 19.8517 14.1528 17.6218 14.6108 14.4556C13.7119 14.3439 12.7601 14.283 11.7742 14.283C10.7882 14.283 9.83642 14.3439 8.9375 14.4556Z" fill="#004B95" />
						<path d="M8.78352 9.23462C8.73446 9.85182 8.70801 10.4923 8.70801 11.151C8.70801 11.8096 8.73446 12.4501 8.78352 13.0673C9.73112 12.9524 10.7324 12.8915 11.7747 12.8915C12.817 12.8915 13.8182 12.9524 14.7658 13.0673C14.8149 12.4501 14.8413 11.8096 14.8413 11.151C14.8413 10.4923 14.8149 9.85182 14.7658 9.23462C13.8182 9.3495 12.817 9.41041 11.7747 9.41041C10.7324 9.41041 9.73112 9.3495 8.78352 9.23462Z" fill="#004B95" />
						<path d="M14.5586 19.4781C16.711 18.8852 18.5422 17.6244 19.7597 15.9604C18.8094 15.4281 17.5632 14.994 16.1234 14.7009C15.8451 16.586 15.3302 18.284 14.5586 19.4781Z" fill="#004B95" />
						<path d="M8.99013 19.4782C8.2181 18.2841 7.70366 16.5861 7.42536 14.7007C5.98556 14.9938 4.73896 15.4279 3.78906 15.9602C5.00691 17.6245 6.83771 18.8857 8.99013 19.4782Z" fill="#004B95" />
						<path d="M8.99013 2.82397C6.83771 3.41681 5.00653 4.67767 3.78906 6.34164C4.73935 6.8739 5.98556 7.308 7.42536 7.60111C7.70366 5.71609 8.21848 4.018 8.99013 2.82397Z" fill="#004B95" />
						<path d="M3.05237 14.7539C4.18512 14.1236 5.61687 13.6262 7.26482 13.305C7.20541 12.5957 7.17474 11.8728 7.17474 11.1506C7.17474 10.4284 7.20541 9.7055 7.26482 8.99653C5.61687 8.67528 4.18512 8.17757 3.05237 7.54761C2.50114 8.64569 2.19141 9.8649 2.19141 11.1506C2.19141 12.4363 2.50114 13.6555 3.05237 14.7539Z" fill="#004B95" />
						<path d="M11.7742 2.44946C10.4931 2.44946 9.39558 4.6794 8.9375 7.84557C9.83642 7.9573 10.7882 8.0182 11.7742 8.0182C12.7601 8.0182 13.7119 7.9573 14.6108 7.84557C14.1528 4.6794 13.0553 2.44946 11.7742 2.44946Z" fill="#004B95" />
						<path d="M20.4966 7.54736C19.3639 8.17768 17.9321 8.67503 16.2842 8.99628C16.3436 9.7056 16.3743 10.4285 16.3743 11.1507C16.3743 11.8729 16.3436 12.5958 16.2842 13.3047C17.9321 13.626 19.3639 14.1237 20.4966 14.7537C21.0479 13.6556 21.3576 12.4364 21.3576 11.1507C21.3576 9.86501 21.0479 8.6458 20.4966 7.54736Z" fill="#004B95" />
						<path d="M14.5586 2.82397C15.3306 4.018 15.8451 5.71609 16.1234 7.60146C17.5632 7.30835 18.8098 6.87426 19.7597 6.34199C18.5418 4.67767 16.711 3.41646 14.5586 2.82397Z" fill="#004B95" />
					</svg> */}<img src='/images/translate.svg' className='w-[24px] h-[24px] md:w-[30px] md:h-[30px] '/>

					<p className="text-white  hidden md:block" >{selectedLanguage}</p>


					<svg width="10" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
						<path d="M5.55998 8.76855L10.5087 0.986159H0.61127L5.55998 8.76855Z" fill="#004B95" />
					</svg>


				</div>
				{/* languageoverlay */}
				<div
					className="bg-white/70 backdrop-blur border absolute top-10 md:-left-[50%] -left-[170%] scale-y-0 opacity-0 origin-top transition-all duration-300 w-max min-w-[100px] rounded-lg"
					id="languageOverlay"
					onMouseLeave={() => {
						document.getElementById("languageOverlay").classList.add("scale-y-0");
						document.getElementById("languageOverlay").classList.add("opacity-0");
					}}
				>
					<p
						onClick={() => {
							let language = "en";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("EN");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px]  text-black cursor-pointer text-sm font-medium"
					>
						English
					</p>
					<p
						onClick={() => {
							let language = "ar";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("AR");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-black cursor-pointer text-sm font-medium"
					>
						Arabic
					</p>
					<p
						onClick={() => {
							let language = "fr";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("FR");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-black cursor-pointer text-sm font-medium"
					>
						French
					</p>

					<p
						onClick={() => {
							let language = "zh-CN";
							let elementGoogle = document.getElementById("google_translate_element");
							elementGoogle.getElementsByTagName("select")[0].value = language;
							elementGoogle.getElementsByTagName("select")[0].dispatchEvent(new Event("change"));
							document.getElementById(":1.container").style.transform = "scale(0)";
							document.getElementById("google_translate_element").style.transform = "scale(0)";
							setSelectedLanguage("CH");
						}}
						className="px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-black cursor-pointer text-sm font-medium"
					>
						Chinese
					</p>
					
				</div>
			</div>
    </div>
  )
}

export default LanguageSelector
