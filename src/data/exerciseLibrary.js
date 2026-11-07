export const EXERCISE_CATEGORIES = [
  { id: "all", label: "All Exercises" },
  { id: "chest", label: "Chest" },
  { id: "back", label: "Back" },
  { id: "shoulders", label: "Shoulders" },
  { id: "arms", label: "Arms" },
  { id: "legs", label: "Legs & Glutes" },
  { id: "core", label: "Core" },
  { id: "stretching", label: "Stretching & Mobility" }
];

export const EXERCISE_LIBRARY = [
  // Chest
  {
    id: "lib-chest-1",
    name: "Chest Press (Dumbbell or Machine)",
    category: "chest",
    muscleGroup: "Pectoralis Major, Anterior Deltoids, Triceps",
    difficulty: "Beginner",
    equipment: "Dumbbells or Chest Press Machine",
    setsReps: "3 sets × 12 reps",
    restTime: "60-90 seconds",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    description: "The primary compound movement for building upper body pushing strength and chest firmness.",
    instructions: [
      "Lie back flat on the bench with feet firmly rooted into the floor.",
      "Grip the dumbbells or machine handles at mid-chest level, wrists aligned over elbows.",
      "Exhale smoothly as you push upward, keeping shoulders pressed gently into the pad.",
      "Slowly lower the weights over 2-3 seconds until you feel a comfortable stretch across the chest.",
      "Repeat with controlled tempo throughout."
    ],
    tips: "Keep your chest open and avoid shrugging your shoulders toward your ears.",
    mistakes: [
      "Flaring elbows straight out at 90 degrees (keep them at roughly 45-60 degrees).",
      "Arching lower back dramatically off the bench.",
      "Bouncing dumbbells off the chest."
    ]
  },
  {
    id: "lib-chest-2",
    name: "Incline Dumbbell Press",
    category: "chest",
    muscleGroup: "Clavicular Pectoral (Upper Chest), Front Delts",
    difficulty: "Beginner / Intermediate",
    equipment: "Incline Bench (30-45°), Dumbbells",
    setsReps: "3 sets × 12 reps",
    restTime: "60-90 seconds",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    description: "Targets the upper chest and collarbone area, promoting upper body postural lift.",
    instructions: [
      "Set an adjustable bench to an incline of 30 to 45 degrees.",
      "Sit back with dumbbells resting on your knees, then kick them smoothly to shoulder level.",
      "Engage your abdominal core and press both dumbbells straight up until arms are extended.",
      "Inhale as you lower them with control back to shoulder level."
    ],
    tips: "Setting the bench too high (above 45°) shifts the work entirely into the front shoulders.",
    mistakes: [
      "Letting the dumbbells collide loudly at the top.",
      "Lifting hips off the seat.",
      "Dropping elbows too low and over-stretching the front shoulder capsule."
    ]
  },

  // Back
  {
    id: "lib-back-1",
    name: "Lat Pulldown",
    category: "back",
    muscleGroup: "Latissimus Dorsi, Biceps, Upper Back",
    difficulty: "Beginner",
    equipment: "Cable Pulldown Machine",
    setsReps: "3 sets × 12 reps",
    restTime: "60-90 seconds",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80",
    description: "Strengthens back width, helps create an hourglass waist illusion, and relieves desk slouching.",
    instructions: [
      "Adjust thigh pads so your legs fit snugly underneath with feet flat.",
      "Grip the long bar slightly wider than your shoulder width with palms facing away.",
      "Lean back 10-15 degrees and pull the bar smoothly toward your upper collarbone.",
      "Lead the movement with your elbows and squeeze your shoulder blades down and together.",
      "Control the bar slowly back to the top stretch position."
    ],
    tips: "Imagine pulling your elbows down into your back pockets.",
    mistakes: [
      "Swinging your upper body backward violently to use momentum.",
      "Pulling the bar behind your neck (puts high stress on cervical spine)."
    ]
  },
  {
    id: "lib-back-2",
    name: "Seated Cable Row",
    category: "back",
    muscleGroup: "Rhomboids, Middle Trapezius, Latissimus Dorsi",
    difficulty: "Beginner",
    equipment: "Seated Cable Row Machine / V-Bar",
    setsReps: "3 sets × 12 reps",
    restTime: "60-90 seconds",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80",
    description: "Crucial exercise for shoulder blade retraction, countering rounded shoulders.",
    instructions: [
      "Sit with feet against the foot plates and knees lightly bent (never hyperextended).",
      "Grasp the handle, sit upright with spine neutral and chest open.",
      "Pull the handle in towards your navel, driving elbows backwards.",
      "Pause for 1 second at full contraction to squeeze your mid-back.",
      "Slowly extend your arms back forward without rounding your lower spine."
    ],
    tips: "Keep your chest high and shoulders relaxed down away from ears.",
    mistakes: [
      "Hunching the back at the starting reach.",
      "Shrugging shoulders into the neck during the pull."
    ]
  },

  // Shoulders
  {
    id: "lib-shoulders-1",
    name: "Dumbbell Shoulder Press",
    category: "shoulders",
    muscleGroup: "Anterior & Lateral Deltoids, Upper Traps",
    difficulty: "Beginner",
    equipment: "Dumbbells, Bench or Standing",
    setsReps: "3 sets × 12 reps",
    restTime: "60-90 seconds",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    description: "Builds overhead strength and round, sculpted shoulder definition.",
    instructions: [
      "Hold dumbbells at ear height with palms facing forward or slightly angled inward.",
      "Brace your core and press upward in a gentle arc until weights meet overhead.",
      "Lower with controlled tempo back to ear level."
    ],
    tips: "Exhale on the way up and inhale on the way down.",
    mistakes: [
      "Arching lower back when pushing heavier weights.",
      "Dropping elbows too low below collarbones."
    ]
  },
  {
    id: "lib-shoulders-2",
    name: "Lateral Raises",
    category: "shoulders",
    muscleGroup: "Lateral (Side) Deltoids",
    difficulty: "Beginner",
    equipment: "Light Dumbbells",
    setsReps: "3 sets × 12 reps",
    restTime: "60 seconds",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    description: "The gold standard exercise for defining side shoulders and upper silhouette.",
    instructions: [
      "Stand tall with feet hip-width, holding light weights at your sides.",
      "Maintain a slight bend in the elbows.",
      "Raise arms out to sides until parallel with the floor.",
      "Hold for a brief moment, then lower slowly back to hips."
    ],
    tips: "Think of leading with your elbows, not your wrists.",
    mistakes: [
      "Using heavy weights and swinging hips.",
      "Raising arms higher than shoulder height."
    ]
  },
  {
    id: "lib-shoulders-3",
    name: "Face Pulls",
    category: "shoulders",
    muscleGroup: "Rear Deltoids, Rotator Cuff, Upper Trapezius",
    difficulty: "Beginner",
    equipment: "Cable Machine + Rope Attachment",
    setsReps: "3 sets × 12 reps",
    restTime: "60 seconds",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80",
    description: "Top corrective exercise for rounded shoulders, neck strain, and rear delt tone.",
    instructions: [
      "Set cable pulley to eye level with rope attached.",
      "Step back with hands holding the rope ends, thumbs pointing backwards.",
      "Pull towards your bridge of nose or forehead, flaring elbows wide and rotating fists back.",
      "Squeeze rear shoulders and return smoothly."
    ],
    tips: "Focus on mind-muscle connection in the back of your shoulders rather than weight load.",
    mistakes: [
      "Pulling down towards the chest.",
      "Letting elbows drop low below wrists."
    ]
  },

  // Arms
  {
    id: "lib-arms-1",
    name: "Triceps Pushdown",
    category: "arms",
    muscleGroup: "Triceps Brachii",
    difficulty: "Beginner",
    equipment: "Cable Machine + Straight or V-Bar",
    setsReps: "3 sets × 12 reps",
    restTime: "45-60 seconds",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    description: "Tones and firms the back of the arms with isolated elbow extension.",
    instructions: [
      "Stand facing the cable station, knees soft, torso leaning forward 5-10 degrees.",
      "Lock elbows by the sides of your torso.",
      "Push bar downward until arms are fully extended.",
      "Contract triceps for 1 second, then control back to 90 degrees."
    ],
    tips: "Elbows should act as fixed hinges and stay pinned in place.",
    mistakes: [
      "Letting elbows drift forward and backward.",
      "Using body weight to slam down the handle."
    ]
  },
  {
    id: "lib-arms-2",
    name: "Dumbbell Bicep Curl",
    category: "arms",
    muscleGroup: "Biceps Brachii",
    difficulty: "Beginner",
    equipment: "Pair of Dumbbells",
    setsReps: "3 sets × 12 reps",
    restTime: "45-60 seconds",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    description: "Classic curling movement for arm strength, tone, and functional pulling.",
    instructions: [
      "Stand tall, holding weights with palms facing forward.",
      "Curl dumbbells upward toward shoulders without swinging.",
      "Squeeze biceps at the top of the movement.",
      "Lower under control over 2 seconds."
    ],
    tips: "Keep your wrists straight and firm throughout the curl.",
    mistakes: [
      "Swinging torso backwards to lift weights.",
      "Allowing weights to free-fall on the descent."
    ]
  },
  {
    id: "lib-arms-3",
    name: "Hammer Curl",
    category: "arms",
    muscleGroup: "Brachialis, Brachioradialis, Biceps",
    difficulty: "Beginner",
    equipment: "Dumbbells",
    setsReps: "3 sets × 12 reps",
    restTime: "45-60 seconds",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    description: "Neutral-grip curl that strengthens the forearms and deep arm muscle for toned arms.",
    instructions: [
      "Hold dumbbells with palms facing each other (neutral grip).",
      "Keeping elbows tight against your ribs, curl up towards chest level.",
      "Hold for 1 count and lower smoothly."
    ],
    tips: "Great for wrist comfort if standard bicep curls cause wrist strain.",
    mistakes: [
      "Rotating wrists outward during the lift."
    ]
  },

  // Legs & Glutes
  {
    id: "lib-legs-1",
    name: "Squats (Goblet or Bodyweight)",
    category: "legs",
    muscleGroup: "Quadriceps, Gluteus Maximus, Hamstrings, Core",
    difficulty: "Beginner",
    equipment: "Bodyweight or Single Dumbbell",
    setsReps: "3 sets × 12 reps",
    restTime: "90 seconds",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    description: "The foundational lower body builder for functional strength, glute tone, and joint health.",
    instructions: [
      "Stand with feet shoulder-width apart, toes turned slightly outward at 15-20°.",
      "Hold dumbbell vertically against your chest (or clasp hands together).",
      "Hinge hips back and bend knees, sitting down like into a chair.",
      "Descend until thighs are parallel to ground while keeping chest tall.",
      "Press through whole foot to stand back up, squeezing glutes at top."
    ],
    tips: "Breathe in on the descent; exhale strongly on the press back up.",
    mistakes: [
      "Knees caving inward (push them outward in line with your toes).",
      "Heels peeling off the floor."
    ]
  },
  {
    id: "lib-legs-2",
    name: "Walking or Stationary Lunges",
    category: "legs",
    muscleGroup: "Glutes, Hamstrings, Quads, Core Balance",
    difficulty: "Beginner / Intermediate",
    equipment: "Bodyweight or Dumbbells",
    setsReps: "3 sets × 10 reps / leg",
    restTime: "60-90 seconds",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    description: "Unilateral leg exercise that eliminates muscular imbalances and sculpts firm glutes.",
    instructions: [
      "Take a comfortable stride forward with one foot.",
      "Lower your body until front thigh is parallel to floor and back knee hovers just above ground.",
      "Keep torso tall and shoulders over hips.",
      "Push back through the front heel to return to start."
    ],
    tips: "Step wide enough that your front shin stays roughly vertical.",
    mistakes: [
      "Front heel lifting off the floor.",
      "Slamming back knee onto hard floor."
    ]
  },
  {
    id: "lib-legs-3",
    name: "Leg Press",
    category: "legs",
    muscleGroup: "Quadriceps, Glutes, Hamstrings",
    difficulty: "Beginner",
    equipment: "45-Degree or Horizontal Leg Press Machine",
    setsReps: "3 sets × 12 reps",
    restTime: "90 seconds",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    description: "Safely overloads the legs without placing spinal load on your back.",
    instructions: [
      "Sit with back and head pressed firmly against the padded support.",
      "Place feet shoulder-width on the platform.",
      "Release safety bars and lower the weight sled until knees reach 90 degrees.",
      "Push firmly through your whole foot to extend legs, stopping just before lock-out."
    ],
    tips: "Placing feet slightly higher on the platform targets more glutes and hamstrings.",
    mistakes: [
      "Allowing tailbone or lower back to curl up off the seat.",
      "Locking knees out rigidly at top."
    ]
  },
  {
    id: "lib-legs-4",
    name: "Calf Raises",
    category: "legs",
    muscleGroup: "Gastrocnemius & Soleus (Calves)",
    difficulty: "Beginner",
    equipment: "Step or Flat Ground",
    setsReps: "3 sets × 15 reps",
    restTime: "45 seconds",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    description: "Tones lower legs, strengthens ankles, and prevents walking fatigue.",
    instructions: [
      "Stand tall near a wall or bar for balance.",
      "Rise up onto the balls of your feet as high as possible.",
      "Hold the peak contraction for 1 full second.",
      "Lower slowly until heels gently touch or drop below step level."
    ],
    tips: "Focus on a slow, controlled stretch and full peak contraction.",
    mistakes: [
      "Bouncing quickly using tendon recoil rather than calf muscle effort."
    ]
  },

  // Core
  {
    id: "lib-core-1",
    name: "Bird Dog",
    category: "core",
    muscleGroup: "Transverse Abdominis, Glutes, Lower Back",
    difficulty: "Beginner",
    equipment: "Yoga Mat",
    setsReps: "3 sets × 10 reps / side",
    restTime: "45 seconds",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    description: "Doctor-recommended core stability exercise that protects spine and builds deep abdominal strength.",
    instructions: [
      "Kneel on hands and knees with wrists under shoulders and knees under hips.",
      "Keep spine in neutral alignment with gaze facing the floor.",
      "Simultaneously reach right arm forward and left leg straight back.",
      "Hold for 2 counts, maintaining stable hips without tilting.",
      "Return gently and switch to opposite side."
    ],
    tips: "Think of reaching long towards opposite walls rather than kicking high.",
    mistakes: [
      "Arching lower back.",
      "Rotating pelvis towards the ceiling."
    ]
  },
  {
    id: "lib-core-2",
    name: "Dead Bug",
    category: "core",
    muscleGroup: "Deep Core, Pelvic Floor, Anterior Chain",
    difficulty: "Beginner",
    equipment: "Yoga Mat",
    setsReps: "3 sets × 10 reps / side",
    restTime: "45 seconds",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    description: "Safest core exercise to flatten and brace abdominal wall without neck or spine flexion.",
    instructions: [
      "Lie on back with arms straight toward ceiling and knees bent at 90 degrees.",
      "Firmly press your lower back into the floor so there is no gap.",
      "Slowly extend right arm overhead and left leg towards the floor.",
      "Only lower as far as you can keep your lower back glued to the floor.",
      "Return and repeat on other side."
    ],
    tips: "Exhale through pursed lips as your limbs extend.",
    mistakes: [
      "Letting your lower back lift off the floor."
    ]
  },
  {
    id: "lib-core-3",
    name: "Plank (Forearms or Knees)",
    category: "core",
    muscleGroup: "Transverse Abdominis, Rectus Abdominis, Shoulders",
    difficulty: "Beginner",
    equipment: "Yoga Mat",
    setsReps: "3 sets × 20-30 seconds",
    restTime: "45-60 seconds",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    description: "Total core engagement that trains abs to act as a natural supportive corset.",
    instructions: [
      "Place forearms on floor with elbows beneath shoulders.",
      "Extend legs back on toes (or knees for beginner modification).",
      "Form a straight line from ears to ankles.",
      "Draw belly button gently inward, squeeze glutes, and hold."
    ],
    tips: "Breathe calmly into your ribs throughout the hold.",
    mistakes: [
      "Hips sagging down toward floor.",
      "Holding breath."
    ]
  },

  // Stretching & Mobility
  {
    id: "lib-stretch-1",
    name: "Cat-Cow Spine Flow",
    category: "stretching",
    muscleGroup: "Spinal Extensors, Neck, Chest, Abdominals",
    difficulty: "Very Easy",
    equipment: "Yoga Mat",
    setsReps: "3 sets × 8-10 slow breaths",
    restTime: "Gentle flow",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    description: "Restores segmental spinal mobility, relieves desk stiffness, and calms the mind.",
    instructions: [
      "Begin on all fours on your mat.",
      "Inhale into Cow pose: drop belly gently, lift chest and tailbone, look up softly.",
      "Exhale into Cat pose: tuck chin to chest, round spine up towards ceiling like an angry cat.",
      "Transition smoothly between the two with your breath."
    ],
    tips: "Make it a moving meditation; match movement strictly to your breathing rhythm.",
    mistakes: [
      "Forcing movement or jamming the neck back."
    ]
  },
  {
    id: "lib-stretch-2",
    name: "Child's Pose (Balasana)",
    category: "stretching",
    muscleGroup: "Lats, Lower Back, Hips, Ankles",
    difficulty: "Very Easy",
    equipment: "Yoga Mat",
    setsReps: "Hold for 45-60 seconds",
    restTime: "As desired",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    description: "The ultimate restorative resting posture to down-regulate stress and decompress the back.",
    instructions: [
      "Kneel on the floor, bring big toes together and open knees wide to mat edges.",
      "Sit hips back onto heels and walk hands forward on the floor.",
      "Rest forehead gently on the mat.",
      "Take slow, deep belly breaths into your back ribs."
    ],
    tips: "Place a soft pillow under your hips or chest if your knees or hips are tight.",
    mistakes: [
      "Tensing shoulders up into your ears."
    ]
  }
];
