using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;


public class GuineaPig : MonoBehaviour {
	public float  Age;

	public static PigHealthProperty Health;
	public static PigCutenessProperty Cuteness;
	public static PigMoodProperty Mood;
	public static PigFullnessProperty Fullness;
	public static PigRadioactivityProperty Radioactivity;
	public static PigPurityOfGenProperty Genpurity;
	
	private RectTransform healthBar;
	private RectTransform cutenessBar;
	private RectTransform moodBar;
	private RectTransform fullnessBar;
	private RectTransform radioactivityBar;
	private RectTransform purityBar;

	public List<Modifier> Modifiers;

	private Text timeText;

	private bool Stage2DoubleHead;
	
	public Sprite HeadSprite;
	public Sprite DoubleHeadSprite;

	public GuineaPig() {
		Stage2DoubleHead = false;
	}

	// Use this for initialization
	void Start () {
		Age = 10;

		Modifiers = new List<Modifier> ();

		healthBar = GameObject.Find ("HealthBarForeground").GetComponent<RectTransform> ();
		cutenessBar = GameObject.Find ("CutenessBarForeground").GetComponent<RectTransform> ();
		moodBar = GameObject.Find ("MoodBarForeground").GetComponent<RectTransform> ();
		fullnessBar = GameObject.Find ("FullnessBarForeground").GetComponent<RectTransform> ();
		radioactivityBar = GameObject.Find ("RadioactivityBarForeground").GetComponent<RectTransform> ();
		purityBar = GameObject.Find ("GenpurityBarForeground").GetComponent<RectTransform> ();
	
		timeText = GameObject.Find ("TimeLabel").GetComponent<Text> ();
	}
	
	// Update is called once per frame
	void Update () {
		Age = Age - Time.deltaTime;

		if (Age < 0F) {
			if (Application.loadedLevelName == "Stage1") {
				Application.LoadLevel("Stage2");
			}

			if (Application.loadedLevelName == "Stage2") {
				Application.LoadLevel("Stage3");
			}
		}

			if (Cuteness.CurrentValue < 35F) {
				if (!Stage2DoubleHead) {
					GameObject.Find("Head").GetComponent<SpriteRenderer>().sprite = DoubleHeadSprite; 
					Stage2DoubleHead = true;
				}
			} else {
				if (Stage2DoubleHead) {
					GameObject.Find("Head").GetComponent<SpriteRenderer>().sprite = HeadSprite; 
					Stage2DoubleHead = false;
				}
			}			

		foreach (Modifier mod in Modifiers) {
			mod.CurrentLifeTime += Time.deltaTime;

			if (mod.CurrentLifeTime < mod.LifeTime) {
				if (mod.AffectedProperty == PigPropertyTypes.Health) {
					Health.CurrentValue += Time.deltaTime * mod.Strength;
					
					if (Health.CurrentValue > Health.Max) {
						Health.CurrentValue = Health.Max;
					}
					
					if (Health.CurrentValue < Health.Min) {
						Health.CurrentValue = Health.Min;
					}
				}			
				
				if (mod.AffectedProperty == PigPropertyTypes.Cuteness) {
					Cuteness.CurrentValue += Time.deltaTime * mod.Strength;
					
					if (Cuteness.CurrentValue > Cuteness.Max) {
						Cuteness.CurrentValue = Cuteness.Max;
					}

					if (Cuteness.CurrentValue < Cuteness.Min) {
						Cuteness.CurrentValue = Cuteness.Min;
					}
				}
				
				if (mod.AffectedProperty == PigPropertyTypes.Mood) {
					Mood.CurrentValue += Time.deltaTime * mod.Strength;
					
					if (Mood.CurrentValue > Mood.Max) {
						Mood.CurrentValue = Mood.Max;
					}

					if (Mood.CurrentValue < Mood.Min) {
						Mood.CurrentValue = Mood.Min;
					}
				}
				
				if (mod.AffectedProperty == PigPropertyTypes.Fullness) {
					Fullness.CurrentValue += Time.deltaTime * mod.Strength;
					
					if (Fullness.CurrentValue > Fullness.Max) {
						Fullness.CurrentValue = Fullness.Max;
					}

					if (Fullness.CurrentValue < Fullness.Min) {
						Fullness.CurrentValue = Fullness.Min;
					}
				}
				
				if (mod.AffectedProperty == PigPropertyTypes.Radioactivity) {
					Radioactivity.CurrentValue += Time.deltaTime * mod.Strength;
					
					if (Radioactivity.CurrentValue > Radioactivity.Max) {
						Radioactivity.CurrentValue = Radioactivity.Max;
					}

					if (Radioactivity.CurrentValue < Radioactivity.Min) {
						Radioactivity.CurrentValue = Radioactivity.Min;
					}
				}
				
				if (mod.AffectedProperty == PigPropertyTypes.Genpurity) {
					Genpurity.CurrentValue += Time.deltaTime * mod.Strength;
					
					if (Genpurity.CurrentValue > Genpurity.Max) {
						Genpurity.CurrentValue = Genpurity.Max;
					}

					if (Genpurity.CurrentValue < Genpurity.Min) {
						Genpurity.CurrentValue = Genpurity.Min;
					}
				}
			}
		}
		
		healthBar.localScale = new Vector3((Health.CurrentValue - Health.Min) / (Health.Max - Health.Min), 1F, 1F);  
		cutenessBar.localScale = new Vector3((Cuteness.CurrentValue - Cuteness.Min) / (Cuteness.Max - Cuteness.Min), 1F, 1F);  
		moodBar.localScale = new Vector3((Mood.CurrentValue - Mood.Min) / (Mood.Max - Mood.Min), 1F, 1F);  
		fullnessBar.localScale = new Vector3((Fullness.CurrentValue - Fullness.Min) / (Fullness.Max - Fullness.Min), 1F, 1F);  
		radioactivityBar.localScale = new Vector3((Radioactivity.CurrentValue - Radioactivity.Min) / (Radioactivity.Max - Radioactivity.Min), 1F, 1F);  
		purityBar.localScale = new Vector3((Genpurity.CurrentValue - Genpurity.Min) / (Genpurity.Max - Genpurity.Min), 1F, 1F);  
	
		timeText.text = Age.ToString ();
	}

	void FireDischargeAction() {	
		Modifier mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -1F;
		mod.AffectedProperty = PigPropertyTypes.Health;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Mood;
		
		Modifiers.Add(mod);

		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Fullness;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = +4F;
		mod.AffectedProperty = PigPropertyTypes.Cuteness;
		
		Modifiers.Add(mod);

		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = +4F;
		mod.AffectedProperty = PigPropertyTypes.Genpurity;
		
		Modifiers.Add(mod);
	}	

	void FireContaminatedWaterAction() {
		Modifier mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 4F;
		mod.AffectedProperty = PigPropertyTypes.Health;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 2F;
		mod.AffectedProperty = PigPropertyTypes.Mood;
		
		Modifiers.Add(mod);

		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Cuteness;
		
		Modifiers.Add(mod);		

		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Genpurity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 4F;
		mod.AffectedProperty = PigPropertyTypes.Fullness;

		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Radioactivity;
		Modifiers.Add(mod);
	}

	void FireGenfoodAction() {
		Modifier mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -1F;
		mod.AffectedProperty = PigPropertyTypes.Health;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 6F;
		mod.AffectedProperty = PigPropertyTypes.Mood;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -4F;
		mod.AffectedProperty = PigPropertyTypes.Cuteness;
		
		Modifiers.Add(mod);		
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -4F;
		mod.AffectedProperty = PigPropertyTypes.Genpurity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 8F;
		mod.AffectedProperty = PigPropertyTypes.Fullness;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Radioactivity;
		Modifiers.Add(mod);
	}
	
	void FireInjectionAction() {
		
		Modifier mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 8F;
		mod.AffectedProperty = PigPropertyTypes.Health;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -6F;
		mod.AffectedProperty = PigPropertyTypes.Cuteness;
		
		Modifiers.Add(mod);		
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 4F;
		mod.AffectedProperty = PigPropertyTypes.Genpurity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 6F;
		mod.AffectedProperty = PigPropertyTypes.Radioactivity;
		
		Modifiers.Add(mod);
	}
	
	void FireMoodDrugsAction() {
		
		Modifier mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -4F;
		mod.AffectedProperty = PigPropertyTypes.Health;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 6F;
		mod.AffectedProperty = PigPropertyTypes.Cuteness;
		
		Modifiers.Add(mod);		
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Genpurity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -1F;
		mod.AffectedProperty = PigPropertyTypes.Radioactivity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -4F;
		mod.AffectedProperty = PigPropertyTypes.Fullness;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 8F;
		mod.AffectedProperty = PigPropertyTypes.Mood;
		
		Modifiers.Add(mod);
	}
	
	void FireBloodAction() {
		
		Modifier mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 8F;
		mod.AffectedProperty = PigPropertyTypes.Health;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 8F;
		mod.AffectedProperty = PigPropertyTypes.Genpurity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 4F;
		mod.AffectedProperty = PigPropertyTypes.Radioactivity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -6F;
		mod.AffectedProperty = PigPropertyTypes.Fullness;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -4F;
		mod.AffectedProperty = PigPropertyTypes.Mood;
		
		Modifiers.Add(mod);
	}
	
	void FirePlayAction() {
		
		Modifier mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 2F;
		mod.AffectedProperty = PigPropertyTypes.Health;
		
		Modifiers.Add(mod);

		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Cuteness;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -2F;
		mod.AffectedProperty = PigPropertyTypes.Genpurity;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = -3F;
		mod.AffectedProperty = PigPropertyTypes.Fullness;
		
		Modifiers.Add(mod);
		
		mod = new Modifier ();
		mod.LifeTime = 5F;
		mod.Strength = 1F;
		mod.AffectedProperty = PigPropertyTypes.Mood;
		
		Modifiers.Add(mod);
	}
}
